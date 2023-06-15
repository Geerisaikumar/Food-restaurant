import { useState, useEffect } from "react";

let useOnline = () => {
  let [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    let OnlineHandler = () => {
      setIsOnline(true);
    };

    let OfflineHandler = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", OnlineHandler);
    window.addEventListener("offline", OfflineHandler);

    return () => {
      window.removeEventListener("online", OnlineHandler);
      window.removeEventListener("offline", OfflineHandler);
    };
  }, []);

  return isOnline;
};

export default useOnline;
