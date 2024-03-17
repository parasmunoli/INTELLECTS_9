export const addUserToLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("log-in", JSON.stringify(true));
};
export const removeUserFromLocalStorage = (user) => {
  localStorage.removeItem("user");
};

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem("user");
  const user = result ? JSON.parse(result) : null;
  return user;
};
export const getLoginFromLocalStorage = () => {
  const result = localStorage.getItem("log-in");
  const user = result ? JSON.parse(result) : false;
  return user;
};
