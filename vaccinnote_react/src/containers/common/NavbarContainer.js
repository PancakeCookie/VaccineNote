import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useHistory } from "react-router";
import NavbarComponent from "../../components/common/NavbarComponent";
import AuthContext from "../../context/AuthContext";

function NavbarContainer({ setIsLoggined }) {
  const history = useHistory();

  const { authInfo, setAuthInfo } = useContext(AuthContext);
  const [visible, setVisible] = useState(false);

  const onClickProfileImg = () => {
    setVisible(!visible);
  };

  const onClickSignout = () => {
    localStorage.removeItem("accessToken");
    setAuthInfo({ isLoggedIn: false });
    history.push("/");
  };

  const onClickHome = () => {
    history.push("/");
  };

  return (
    <NavbarComponent
      onClickProfileImg={onClickProfileImg}
      visible={visible}
      authInfo={authInfo}
      onClickSignout={onClickSignout}
      onClickHome={onClickHome}
      onClickSignout={onClickSignout}
    />
  );
}

export default NavbarContainer;
