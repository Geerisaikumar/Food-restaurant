import { useContext } from "react";
import userContext from "./utils/userContext";

let Footer = () => {
  let { user } = useContext(userContext);

  return (
    <div className="w-full bg-[#061d35] text-white py-6">
      <h3 className=" text-center font-medium xs:text-[13px]">
        Developed By {user.name} - {user.email}
      </h3>
    </div>
  );
};

export default Footer;
