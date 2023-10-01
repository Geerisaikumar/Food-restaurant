import { createContext } from "react";

const useContextAPI = createContext({
  user: {
    name: "Dummy Name",
    email: "dummyemail@gmail.com",
  },
});

export default useContextAPI;
