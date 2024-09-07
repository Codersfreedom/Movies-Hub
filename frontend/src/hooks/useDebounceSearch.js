import { useEffect, useState } from "react";

const useDebounceSearch = (query, delay = 500) => {
  const [deboucedValue, setDebouncedValue] = useState(query);

  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedValue(query);
    }, delay);

    return () => {
      clearTimeout(id);
    };
  }, [query, delay]);

  return deboucedValue;
};

export default useDebounceSearch;
