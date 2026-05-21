const reserveForm = document.querySelector("#reserveForm");
const formResult = document.querySelector("#formResult");
const dateInput = reserveForm?.querySelector('input[name="date"]');

if (dateInput) {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  dateInput.min = `${yyyy}-${mm}-${dd}`;
}

reserveForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(reserveForm);
  const name = data.get("name");
  const date = data.get("date");
  const time = data.get("time");
  const guests = data.get("guests");

  formResult.textContent = `${name}，已记录 ${date} ${time} 的 ${guests} 人订位。`;
  reserveForm.reset();
  if (dateInput) {
    dateInput.value = date;
  }
});
