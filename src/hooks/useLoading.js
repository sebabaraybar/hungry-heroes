import { useContext } from "react";
import { LoaderContext } from "../context/LoaderContext";


export default function useLoading() {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error('useLoading must be used within LoadingProvider');
  }
  return context.setLoading;
}