import { useQuery } from "@tanstack/react-query";

const API_URL = "https://api.github.com/repos/facebook/react";

async function getLabels() {
  const res = await fetch(`${API_URL}/labels`);
  const data = await res.json();
  return data;
}

export const LabelPicker = () => {
  const labelsQuery = useQuery({
    queryKey: ["labels"],
    queryFn: getLabels,
  });

  return (
    <div>
      <span
        className="badge rounded-pill m-1 label-picker"
        style={{ border: `1px solid #ffccd3`, color: "#ffccd3" }}
      >
        Primary
      </span>
    </div>
  );
};
