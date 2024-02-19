const API_URL =
  "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new";

export async function getRandomNumberFromAPI(): Promise<number> {
  try {
    const res = await fetch(API_URL);
    const numberString = await res.text();
    return +numberString;
  } catch (e) {
    throw new Error("Error loading number");
  }
}
