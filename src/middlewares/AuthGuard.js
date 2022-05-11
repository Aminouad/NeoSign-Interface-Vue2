const AuthGuard = (to, from, next) => {
    const isAuthenticated = !!JSON.parse(localStorage.getItem("token"));

  if (!isAuthenticated) {
    next("/authentication");
  } else {
    next();
  }
};

export default AuthGuard;
