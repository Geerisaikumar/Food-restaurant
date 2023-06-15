import { createContext } from "react";

const userContext = createContext({
  user: {
    name: "Dummy Name",
    email: "dummyemail@gmail.com",
  },
});

export default userContext;
