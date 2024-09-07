import { useEffect, useState } from "react";

const useDebounceSearch = (query, delay = 500) => {
  const [deboucedValue, setDebouncedValue] = useState(query);

  useEffect(() => {
    const id = setTimeout(() => {
      console.log("Setting timeout");
      setDebouncedValue(query);
    }, delay);

    return () => {
      console.log("Clearing timeout");
      clearTimeout(id);
    };
  }, [query, delay]);

  return deboucedValue;
};

export default useDebounceSearch;
