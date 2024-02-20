import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../../api/githubApi";
import { sleep } from "../../helpers/sleep";
import { Label } from "../interfaces/label";

async function getLabels(): Promise<Label[]> {
  await sleep(2);

  const { data } = await githubApi.get<Label[]>("/labels");
  return data;
}

export function useLabels() {
  const labelsQuery = useQuery({
    queryKey: ["labels"],
    queryFn: getLabels,
  });

  return { labelsQuery };
}
