import { useState } from "react";

type Value = string | number | boolean | object | symbol;

function useLocalStorage(keyName: string, defaultValue: Value) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(keyName);

      if (value) {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });

  const setValue = (newValue: Value) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {
      throw err;
    }
    setStoredValue(newValue);
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
