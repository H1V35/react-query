import { useQuery } from "@tanstack/react-query";
import { getRandomNumberFromAPI } from "./services";

export function App() {
  const query = useQuery({
    queryKey: ["randomNumber"],
    queryFn: getRandomNumberFromAPI,
  });

  return (
    <main className="flex flex-col items-center gap-4">
      {query.isFetching ? (
        <h2 className="text-4xl font-bold">Loading...</h2>
      ) : (
        <h2 className="text-4xl font-bold">Random number: {query.data}</h2>
      )}

      {!query.isLoading && query.isError && (
        <h2 className="text-xl font-bold">{`${query.error}`}</h2>
      )}

      <button
        onClick={() => query.refetch()}
        disabled={query.isFetching}
        className="w-36 py-2 bg-[#dedede] rounded-full font-bold text-[#060606] transition duration-300 hover:scale-105"
      >
        {query.isFetching ? "..." : "New number"}
      </button>
    </main>
  );
}
