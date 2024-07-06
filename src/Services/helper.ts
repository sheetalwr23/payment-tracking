interface User {
  email: string;
  password: string;
  confirmPassword: string;
}

const validateSignUpForm = ({ email, password, confirmPassword }: User) => {
  if (!email) {
    return "Email is required";
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Email is not valid";
  }
  if (!password) {
    return "Password is required";
  }
  if (password.length < 6) {
    return "Password should be at least 6 characters long";
  }
  if (password !== confirmPassword) {
    return "Passwords do not match";
  }
  return null;
};

export { validateSignUpForm };
