import { useQuery } from "@tanstack/react-query";
import { Issue } from "../interfaces";
import { githubApi } from "../../api/githubApi";
import { sleep } from "../../helpers";

export const getIssueInfo = async (issueNumber: number): Promise<Issue> => {
  await sleep(2);

  const { data } = await githubApi.get<Issue>(`/issues/${issueNumber}`);
  return data;
};

export const getIssueComments = async (
  issueNumber: number
): Promise<Issue[]> => {
  await sleep(2);

  const { data } = await githubApi.get<Issue[]>(
    `/issues/${issueNumber}/comments`
  );
  return data;
};

export function useIssue(issueNumber: number) {
  const issueQuery = useQuery({
    queryKey: ["issue", issueNumber],
    queryFn: () => getIssueInfo(issueNumber),
  });

  const issueCommentsQuery = useQuery({
    queryKey: ["issue", issueNumber, "comments"],
    queryFn: () => getIssueComments(issueQuery.data!.number),
    enabled: !!issueQuery.data,
  });

  return { issueQuery, issueCommentsQuery };
}
