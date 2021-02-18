import React, { useState, useEffect } from "react";

const AuthHOC = (WrappedComponent) => {
  return (props) => {
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
      if (props.admin) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    }, [props.admin]);

    return isAdmin ? <WrappedComponent {...props} /> : <div>Please Log In</div>;
  };
};

export default AuthHOC;
