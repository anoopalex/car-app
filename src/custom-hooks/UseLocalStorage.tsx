import React from "react";

export const useLocalStorage = (key: string) => {
  const updateValue = () => {
    localStorage.setItem(key, (!value).toString());
    setValue(!value);
  };
  const getValue = () => localStorage.getItem(key) === "true";
  const [value, setValue] = React.useState(getValue());
  return [value, updateValue];
};
