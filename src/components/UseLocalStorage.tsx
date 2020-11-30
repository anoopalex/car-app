import React from "react";

/**
 * Function to ADD/Remove Favorite car using local storage
 * @param key stock number
 */
export const useLocalStorage = (key: string) => {
  // Get value from local storage
  const getValue = () => localStorage.getItem(key) === "true";

  // Set value from local storage
  const updateValue = () => {
    localStorage.setItem(key, (!value).toString());
    setValue(!value);
  };
  const [value, setValue] = React.useState(getValue());
  return [value, updateValue];
};
