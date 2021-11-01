import { useEffect, useState } from "react";

interface RequestProps {
  url: RequestInfo;
  init?: RequestInit;
}

type User = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const useFetch = ({ url, init }: RequestProps) => {
  // Response state
  const [data, setData] = useState<User[]>();

  useEffect(() => {
    const apiFetch = async (url, init) => {
      try {
        // Fetch data from REST API
        const response = await fetch(url, init);

        if (response.status === 200) {
          // Extract json
          const rawData = await response.json();
          setData(rawData);
        } else {
          console.error(`Error ${response.status} ${response.statusText}`);
        }
      } catch (error) {
        console.error(`Error ${error}`);
      }
    };
    apiFetch(url, init);
  }, []);

  return data;
};
