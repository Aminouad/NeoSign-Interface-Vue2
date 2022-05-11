const GuestGuard = (to, from, next) => {
    const isAuthenticated = !!JSON.parse(localStorage.getItem("token"));

  if (isAuthenticated) {
    next("/");
  } else {
    next();
  }
};

export default GuestGuard;
