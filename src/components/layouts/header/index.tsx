import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as NotificationSvg } from "../../../assets/icons/notification.svg";
import { ReactComponent as QuestionSvg } from "../../../assets/icons/question.svg";
import { ReactComponent as SearchSvg } from "../../../assets/icons/search.svg";
import { ReactComponent as SettingSvg } from "../../../assets/icons/setting.svg";
import { ReactComponent as UploadSvg } from "../../../assets/icons/upload.svg";

const Header = () => {
  const [inforUser, setInforUser] = useState<string>("");
  useEffect(() => {
    const storedInfor = localStorage.getItem("infor");
    if (storedInfor) {
      setInforUser(storedInfor);
    }
  }, []);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    setTimeout(() => {
      navigate("/login");
      alert("Please login again!");
    }, 1000);
  };
  return (
    <header>
      <div className="wrapper-header">
        <div className="wrapper-header__search">
          <div className="wrapper-header__search__input">
            <SearchSvg />
            <input type="text" placeholder="Rechercher dans Metaforma" />
          </div>
          <img src={require("../../../assets/images/add.png")} alt="add" />
          <div className="wrapper-header__search__add"></div>
        </div>
        <div className="wrapper-header__action">
          <SettingSvg />
          <NotificationSvg />
          <QuestionSvg />
          <div className="wrapper-header__action__avatar">
            <img
              src={require("../../../assets/images/avatar.png")}
              alt="avatar"
            />
            <div className="wrapper-header__action__avatar__content">
              <span>{inforUser}</span>
              <span>CEO, Admin</span>
            </div>
            <div className="logout" onClick={handleLogout}>
              <UploadSvg />
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
