export default function validateForm(username, password) {
  const errors = [];

  if (username.includes("a")) {
    errors.push("Please re-enter Username");
  }

  if (!password.includes(Number)) {
    errors.push("Please re-try Password");
  }

  return errors;
}
