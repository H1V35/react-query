import React from "react";
import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../../api/githubApi";
import { sleep } from "../../helpers";
import { Issue, State } from "../interfaces";

interface Props {
  labels: string[];
  page?: number;
  state?: State;
}

const getIssues = async ({
  labels,
  page = 1,
  state,
}: Props): Promise<Issue[]> => {
  await sleep(2);

  const params = new URLSearchParams();

  if (labels.length > 0) {
    const labelsString = labels.join(",");
    params.append("labels", labelsString);
  }

  if (state) params.append("state", state);

  params.append("page", page.toString());
  params.append("per_page", "5");

  const { data } = await githubApi.get<Issue[]>("/issues", { params });
  return data;
};

export function useIssues({ labels, state }: Props) {
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    setPage(1);
  }, [labels, state]);

  const issuesQuery = useQuery({
    queryKey: ["issues", { labels, page, state }],
    queryFn: () => getIssues({ labels, page, state }),
  });

  const nextPage = () => {
    if (issuesQuery.data?.length === 0) return;

    setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return {
    // Properties
    issuesQuery,

    // Getter
    page: issuesQuery.isFetching ? "Loading..." : page,

    // Methods
    nextPage,
    prevPage,
  };
}
