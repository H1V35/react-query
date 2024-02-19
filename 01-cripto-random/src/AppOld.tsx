import React from "react";
import { getRandomNumberFromAPI } from "./services";

export function App() {
  const [number, setNumber] = React.useState<number>();
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string>();
  const [key, forceRefetch] = React.useReducer((x) => x + 1, 0);

  React.useEffect(() => {
    setIsLoading(true);
    getRandomNumberFromAPI()
      .then(setNumber)
      .catch((error) => setError(error.message));
  }, [key]);

  React.useEffect(() => {
    if (number) setIsLoading(false);
  }, [number]);

  React.useEffect(() => {
    if (error) setIsLoading(false);
  }, [error]);

  return (
    <main className="flex flex-col items-center gap-4">
      {isLoading ? (
        <h2 className="text-4xl font-bold">Loading...</h2>
      ) : (
        <h2 className="text-4xl font-bold">Random number: {number}</h2>
      )}

      {!isLoading && error && <h2 className="text-xl font-bold">{error}</h2>}

      <button
        onClick={forceRefetch}
        disabled={isLoading}
        className="w-36 py-2 bg-[#dedede] rounded-full font-bold text-[#060606] transition duration-300 hover:scale-105"
      >
        {isLoading ? "..." : "New number"}
      </button>
    </main>
  );
}
