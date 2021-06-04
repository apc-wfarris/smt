const userForm = document.getElementById("user-management-form");
userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const fieldSets = document.querySelectorAll("fieldset");
  fieldSets.forEach((set, i) => {
    const inputs = set.querySelectorAll("input");
    const inputValues = Array.from(inputs)
      .map((el) => {
        if (el.type == "checkbox") {
          return !!el.checked + 0;
        } else {
          return el.value;
        }
      })
      .join(",");
    const postBody = `userData=${i + 1},${inputValues}`;
    fetch("/user-man.cgi", {
      method: "POST",
      headers: {
        "Content-Type": "application-x-www-formurlencoded",
      },
      body: postBody,
    });
  });
});
