import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../../api/githubApi";
import { sleep } from "../../helpers";
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

  if (labels.length > 0) {
    const labelsString = labels.join(",");
    params.append("labels", labelsString);
  }

  if (state) params.append("state", state);

  params.append("page", "1");
  params.append("per_page", "5");

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
