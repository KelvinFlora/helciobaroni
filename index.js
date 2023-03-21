const phoneInput = document.getElementById("phone");
phoneInput.addEventListener("input", formatPhone);

function formatPhone() {
  const phoneInput = document.getElementById("phone");
  let phone = phoneInput.value.replace(/\D/g, ""); // remove all non-numeric characters
  let formattedPhone = "";

  if (phone.length < 1) {
    formattedPhone = "";
  } else if (phone.length < 3) {
    formattedPhone = "(" + phone;
  } else if (phone.length < 7) {
    formattedPhone = "(" + phone.substring(0, 2) + ") " + phone.substring(2);
  } else if (phone.length < 11) {
    formattedPhone =
      "(" +
      phone.substring(0, 2) +
      ") " +
      phone.substring(2, 6) +
      "-" +
      phone.substring(6);
  } else {
    formattedPhone =
      "(" +
      phone.substring(0, 2) +
      ") " +
      phone.substring(2, 7) +
      "-" +
      phone.substring(7);
  }

  phoneInput.value = formattedPhone;
}
