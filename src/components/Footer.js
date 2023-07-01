import { useContext } from "react";
import userContext from "./utils/userContext";

let Footer = () => {
  let { user } = useContext(userContext);

  return (
    <div className="w-full bg-[#061d35] text-white py-6">
      <h3 className=" text-center font-medium xs:text-[13px]">
        {" "}
        2023 © Food Restaurant Developed By {user.name} - {user.email}
      </h3>
      {/* <div className="social-media">
        <a href="https://www.linkedin.com/in/dipayanmaji/" target="_blank">
          <ImLinkedin2 />
        </a>
        <a href="https://github.com/dipayanmaji" target="_blank">
          <TbBrandGithub />
        </a>
        <a href="https://twitter.com/dipayanmaji11" target="_blank">
          <BsTwitter />
        </a>
        <a href="https://www.instagram.com/dipayan.maji/" target="_blank">
          <BsInstagram />
        </a>
        <a href="https://www.facebook.com/dip.ayan.716" target="_blank">
          <TfiFacebook />
        </a>
      </div> */}
    </div>
  );
};

export default Footer;
