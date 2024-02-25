import React from "react";
import { IssueList } from "../components/IssueList";
import { LabelPicker } from "../components/LabelPicker";
import { LoadingIcon } from "../../shared/components/LoadingIcon";
import { useIssuesInfinite } from "../hooks";
import { State } from "../interfaces";

export function ListViewInfinite() {
  const [selectedLabels, setSelectedLabels] = React.useState<string[]>([]);
  const [state, setState] = React.useState<State>();

  const { issuesQuery } = useIssuesInfinite({
    labels: selectedLabels,
    state,
  });

  const onLabelChanged = (labelName: string) => {
    selectedLabels.includes(labelName)
      ? setSelectedLabels(selectedLabels.filter((label) => label !== labelName))
      : setSelectedLabels([...selectedLabels, labelName]);
  };

  return (
    <div className="row mt-5">
      <div className="col-8">
        {issuesQuery.isLoading ? (
          <div className="d-flex justify-content-center align-items-center">
            <LoadingIcon />
          </div>
        ) : (
          <>
            <IssueList
              issues={issuesQuery.data?.pages.flat() || []}
              state={state}
              onStateChanged={(newState) => setState(newState)}
            />

            <div className="d-flex mt-2 justify-content-center align-items-center">
              {issuesQuery.isFetching ? (
                <LoadingIcon />
              ) : (
                <button
                  className="btn btn-outline-primary"
                  disabled={!issuesQuery.hasNextPage}
                  onClick={() => issuesQuery.fetchNextPage()}
                >
                  {!issuesQuery.hasNextPage ? "End of content" : "Load more"}
                </button>
              )}
            </div>
          </>
        )}
      </div>

      <div className="col-4">
        <LabelPicker
          selectedLabels={selectedLabels}
          onChange={(labelName) => onLabelChanged(labelName)}
        />
      </div>
    </div>
  );
}
