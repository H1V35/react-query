import React from "react";
import { useNavigate } from "react-router-dom";
import { FiInfo, FiMessageSquare, FiCheckCircle } from "react-icons/fi";

import { queryClient } from "../../lib/tanstack-query";
// import { getIssueComments, getIssueInfo } from "../hooks/useIssue";
import { Issue, State } from "../interfaces";

interface Props {
  issue: Issue;
}

export const IssueItem: React.FC<Props> = ({ issue }) => {
  const navigate = useNavigate();

  // const prefetchData = () => {
  //   queryClient.prefetchQuery({
  //     queryKey: ["issue", issue.number],
  //     queryFn: () => getIssueInfo(issue.number),
  //   });

  //   queryClient.prefetchQuery({
  //     queryKey: ["issue", issue.number, "comments"],
  //     queryFn: () => getIssueComments(issue.number),
  //   });
  // };

  const preSetData = () => {
    queryClient.setQueryData(["issue", issue.number], issue);
  };

  return (
    <div
      className="card mb-2 issue"
      onClick={() => navigate(`/issues/issue/${issue.number}`)}
      // onMouseEnter={prefetchData}
      onMouseEnter={preSetData}
    >
      <div className="card-body d-flex align-items-center">
        {issue.state === State.Open ? (
          <FiInfo size={30} color="red" style={{ flexShrink: 0 }} />
        ) : (
          <FiCheckCircle size={30} color="green" style={{ flexShrink: 0 }} />
        )}

        <div className="d-flex flex-column flex-fill px-2">
          <span>{issue.title}</span>
          <span className="issue-subinfo">
            #{issue.number} opened 2 days ago by{" "}
            <span className="fw-bold">{issue.user.login}</span>
          </span>
          <div>
            {issue.labels.map((label) => (
              <span
                key={label.id}
                className="badge rounded-pill m-1 px-2 py-1"
                style={{ backgroundColor: `#${label.color}`, color: "black" }}
              >
                {label.name}
              </span>
            ))}
          </div>
        </div>

        <div className="d-flex align-items-center">
          <img
            src={issue.user.avatar_url}
            alt={`${issue.user.login} Avatar`}
            className="avatar"
          />
          <span className="px-2">{issue.comments}</span>
          <FiMessageSquare />
        </div>
      </div>
    </div>
  );
};
