import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../../api/githubApi";
import { sleep } from "../../helpers/sleep";
import { Issue, State } from "../interfaces";

interface Props {
  labels: string[];
  state?: State;
}

const getIssues = async (
  labels: string[] = [],
  state?: State
): Promise<Issue[]> => {
  await sleep(2);

  const params = new URLSearchParams();

  if (state) params.append("state", state);

  const { data } = await githubApi.get<Issue[]>("/issues", { params });
  return data;
};

export function useIssues({ state, labels }: Props) {
  const issuesQuery = useQuery({
    queryKey: ["issues", { state, labels }],
    queryFn: () => getIssues(labels, state),
  });

  return { issuesQuery };
}
