import { useQuery } from "@tanstack/react-query";
import { getRandomNumberFromAPI } from "../services";

export function useGetRandomNumber() {
  const query = useQuery({
    queryKey: ["randomNumber"],
    queryFn: getRandomNumberFromAPI,
  });

  return query;
}
