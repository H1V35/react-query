import React from "react";
import { getRandomNumberFromAPI } from "./services";

export function App() {
  const [number, setNumber] = React.useState<number>();

  React.useEffect(() => {
    getRandomNumberFromAPI().then((fetchedNumber) => setNumber(fetchedNumber));
  }, []);

  return (
    <main className="flex place-content-center">
      <h1 className="text-4xl font-bold">Random number: {number}</h1>
    </main>
  );
}
