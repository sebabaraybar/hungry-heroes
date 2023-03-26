using AccessData;
using Entities.Models;
using Entities.ViewModels.Request;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;

namespace ProyectoIntegrador.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly AppDBContext _context;

        public UserController(AppDBContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Registro de usuario
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>

        [HttpPost("register")]
        public async Task<IActionResult> Register(UserRegisterVMRequest request)
        {
            if (_context.Users.Any(u => u.Email == request.Email))
            {
                //TODO: Usar Exception ya creado en Common
                return BadRequest("User already exists.");
            }

            CreatePasswordHash(request.Password, out byte[] passwordHash, out byte[] passwordSalt);

            var user = new User
            {
                Email = request.Email,
                PasswordHash = passwordHash,
                PasswordSalt = passwordSalt,
                VerificationToken = CreateRandomToken()

            };


            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return Ok("User succesfully created");

        }

        /// <summary>
        /// Logueo de usuario
        /// TODO: Ver tema de Roles
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>

        [HttpPost("login")]
        public async Task<IActionResult> Login(UserLoginVMRequest request)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == request.Email);
            if (user == null)
            {
                return BadRequest("User not found.");
            }

            if (!VerifyPasswordHash(request.Password, user.PasswordHash, user.PasswordSalt))
            {
                return BadRequest("Password is incorrect.");
            }

            if (user.VerifiedAt == null)
            {
                return BadRequest("Not verified");
            }


            return Ok($"Welcome back, {user.Email}");

        }

        /// <summary>
        /// Método para verificar usuario a través del token
        /// </summary>
        /// <param name="token"></param>
        /// <returns></returns>
        [HttpPost("verify")]
        public async Task<IActionResult> Verify(string token)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.VerificationToken == token);
            if (user == null)
            {
                return BadRequest("Invalid token.");
            }

            user.VerifiedAt = DateTime.Now;
            await _context.SaveChangesAsync();


            return Ok("User verified");

        }

        /// <summary>
        /// Método para recuperar contraseña
        /// </summary>
        /// <param name="email"></param>
        /// <returns></returns>
        [HttpPost("forgot-password")]
        public async Task<IActionResult> ForgotPassword(string email)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
            if (user == null)
            {
                return BadRequest("User not found.");
            }

            user.PasswordResetToken = CreateRandomToken();
            user.ResetTokenExpires = DateTime.Now.AddDays(1);
            await _context.SaveChangesAsync();


            return Ok("You may now reset your password");
        }

        /// <summary>
        /// Método para crear nueva contraseña
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [HttpPost("reset-password")]
        public async Task<IActionResult> ResetPassword(ResetPasswordVMRequest request)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.PasswordResetToken == request.Token);
            if (user == null || user.ResetTokenExpires < DateTime.Now)
            {
                return BadRequest("Invalid Token.");
            }

            CreatePasswordHash(request.Password, out byte[] passwordHash, out byte[] passwordSalt);

            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;
            user.PasswordResetToken = null;
            user.ResetTokenExpires = null;

            await _context.SaveChangesAsync();


            return Ok("Password succesfully reset.");

        }

        /// <summary>
        /// Método para crear contraseña mas segura
        /// </summary>
        /// <param name="password"></param>
        /// <param name="passwordHash"></param>
        /// <param name="passwordSalt"></param>
        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }
        /// <summary>
        /// Método para crear token de forma aleatoria 
        /// en el caso de que el usuario olvide contraseña 
        /// y desee reestablecerla.
        /// </summary>
        /// <returns></returns>
        private string CreateRandomToken()
        {
            return Convert.ToHexString(RandomNumberGenerator.GetBytes(64));
        }

        /// <summary>
        /// Método para verificar si la contraseña 
        /// es correcta o no mediante la conversión 
        /// del passwordSalt al passwordHash.
        /// </summary>
        /// <param name="password"></param>
        /// <param name="passwordHash"></param>
        /// <param name="passwordSalt"></param>
        /// <returns></returns>
        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using (var hmac = new HMACSHA512(passwordSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                return computedHash.SequenceEqual(passwordHash);
            }
        }



    }
}