function setFormDate() {
    const currentDate = new Date();
    const formDate = currentDate.toISOString(); // ISO format is readable + sortable
    const dateInput = document.getElementById("formDate");
  
    if (dateInput) {
      dateInput.value = formDate;
      console.log("Form date set: " + formDate);
    } else {
      console.warn("formDate input not found.");
    }
  }
  
  document.addEventListener("DOMContentLoaded", setFormDate);
  