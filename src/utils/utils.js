const makeOptions = (arr = [], name = 'name', value = 'id') => {
  const options = arr?.map((option) => {
    const item = {
      key: option?.[value] === 0 ? String(option?.[value]) : option?.[value] || option,
      label: option?.[name] || option,
      value: option?.[value] === 0 ? String(option?.[value]) : option?.[value] || option
    };
    return item;
  });
  return options;
};

const makeOptionsObject = (objectEnum, name = 'name', value = 'id') => {
  const keys = Object.keys(objectEnum);
  const arr = keys.map((keyInt) => ({ key: keyInt, ...objectEnum[keyInt] }));

  const options = makeOptions(arr, name, value);
  return options;
};

export {
  makeOptions,
	makeOptionsObject
};

