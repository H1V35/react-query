import React from "react";
import { IssueList } from "../components/IssueList";
import { LabelPicker } from "../components/LabelPicker";
import { LoadingIcon } from "../../shared/components/LoadingIcon";
import { useIssues } from "../hooks";
import { State } from "../interfaces";

export const ListView = () => {
  const [selectedLabels, setSelectedLabels] = React.useState<string[]>([]);
  const [state, setState] = React.useState<State>();

  const { issuesQuery, page, nextPage, prevPage } = useIssues({
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
        <div className="d-flex mb-2 justify-content-between align-items-center">
          <button className="btn btn-outline-primary" onClick={prevPage}>
            Prev
          </button>
          <span>{page}</span>
          <button className="btn btn-outline-primary" onClick={nextPage}>
            Next
          </button>
        </div>

        {issuesQuery.isLoading ? (
          <LoadingIcon />
        ) : (
          <IssueList
            issues={issuesQuery.data || []}
            state={state}
            onStateChanged={(newState) => setState(newState)}
          />
        )}

        <div className="d-flex mt-2 justify-content-between align-items-center">
          <button className="btn btn-outline-primary" onClick={prevPage}>
            Prev
          </button>
          <span>{page}</span>
          <button className="btn btn-outline-primary" onClick={nextPage}>
            Next
          </button>
        </div>
      </div>

      <div className="col-4">
        <LabelPicker
          selectedLabels={selectedLabels}
          onChange={(labelName) => onLabelChanged(labelName)}
        />
      </div>
    </div>
  );
};
