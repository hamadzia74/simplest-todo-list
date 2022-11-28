const users = [
  {
    role: "admin",
    email: "admin@reia.com",
  },
  {
    role: "corporate",
    email: "corporate@reia.com",
  },
  {
    role: "individual",
    email: "individual@reia.com",
  },
];

const authenticateUser = (user) => {
  const findUser = users.find((item) => item.email === user.email);
  if (findUser) {
    return findUser;
  }
  return false;
};

export default authenticateUser;
