const getInputElements = (formElement) =>
  formElement.querySelectorAll("select, input");

/**
 * Set up a form for a editing/not editing state.
 * @param {string} formId ID of the form to set up
 * @param {submissionHandler} cb callback to run when form is submitted in the edit state
 */
export const createStatefulForm = (formId, cb) => {
  let editingForm = false;
  const form = document.getElementById(formId);

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (editingForm) {
      cb(this);
    }
    editingForm = !editingForm;
    getInputElements(this).forEach((input) => {
      input.disabled = !editingForm;
      if (input.type == "submit") {
        input.value = editingForm ? "Save" : "Edit";
        input.disabled = false;
      }
    });
  });
};

/**
 * This callback is run whenever the form is submitted in edit mode.
 * @callback submissionHandler
 * @param {HTMLFormElement} form Form selected from parent's formId
 */
