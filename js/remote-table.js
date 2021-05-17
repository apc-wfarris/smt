const createRemoteTableCells = (remote) => {
  const descriptionCell = document.createElement("td");
  const visibleCell = document.createElement("td");

  descriptionCell.textContent = remote.description;
  visibleCell.textContent = remote.permit ? "Yes" : "No";

  return [descriptionCell, visibleCell];
};

export const fillRemoteTable = async () => {
  const remoteRequest = await fetch("api/remotes.json");
  const remotes = await remoteRequest.json();
  const remoteTable = document.getElementById("remotes-table");

  remotes
    .filter((r) => r.description != "")
    .forEach((remote) => {
      const newRow = document.createElement("tr");
      // create description & visible cells
      const [d, v] = createRemoteTableCells(remote);

      newRow.appendChild(d);
      newRow.appendChild(v);

      remoteTable.appendChild(newRow);
    });
};
