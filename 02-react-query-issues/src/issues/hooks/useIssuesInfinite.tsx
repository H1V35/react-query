import { useInfiniteQuery } from "@tanstack/react-query";
import { githubApi } from "../../api/githubApi";
import { sleep } from "../../helpers";
import { Issue, State } from "../interfaces";

interface Props {
  labels: string[];
  page?: number;
  state?: State;
}

interface QueryProps {
  pageParam?: number;
  queryKey: (string | Props)[];
}

const getIssuesInfinite = async ({
  pageParam = 1,
  queryKey,
}: QueryProps): Promise<Issue[]> => {
  const [, , args] = queryKey;
  const { state, labels } = args as Props;

  await sleep(2);

  const params = new URLSearchParams();

  if (labels.length > 0) {
    const labelsString = labels.join(",");
    params.append("labels", labelsString);
  }

  if (state) params.append("state", state);

  params.append("page", pageParam.toString());
  params.append("per_page", "5");

  const { data } = await githubApi.get<Issue[]>("/issues", { params });
  return data;
};

export function useIssuesInfinite({ labels, state }: Props) {
  const issuesQuery = useInfiniteQuery({
    queryKey: ["issues", "infinite", { labels, state }],
    queryFn: (data) => getIssuesInfinite(data),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.length === 0) return;

      return pages.length + 1;
    },
  });

  return { issuesQuery };
}
