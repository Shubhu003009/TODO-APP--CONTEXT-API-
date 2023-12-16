import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setvalue] = useState(() => {
    try {
      let localValue = window.localStorage.getItem(key);
      return localValue ? JSON.parse(localValue) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setvalue];
};

export default useLocalStorage;
