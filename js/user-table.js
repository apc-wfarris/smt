const createUserTableCells = (user) => {
  const firstNameCell = document.createElement("td");
  const lastNameCell = document.createElement("td");
  const permit = document.createElement("td");

  firstNameCell.textContent = user.fname;
  lastNameCell.textContent = user.lname;
  permit.textContent = user.permit ? "Yes" : "No";

  return [firstNameCell, lastNameCell, permit];
};

export const fillUserTable = async () => {
  const userRequest = await fetch("api/users.json");
  const users = await userRequest.json();
  const userTable = document.getElementById("users-table");

  users
    .filter((u) => u.fname != "")
    .forEach((user) => {
      const newRow = document.createElement("tr");
      const [fn, ln, p] = createUserTableCells(user);

      newRow.appendChild(fn);
      newRow.appendChild(ln);
      newRow.appendChild(p);

      userTable.appendChild(newRow);
    });
};
