import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as BottleSvg } from "../../../assets/icons/bottle.svg";
import { ReactComponent as ChooseSvg } from "../../../assets/icons/choose.svg";
import { ReactComponent as ElectricSvg } from "../../../assets/icons/electric.svg";
import { ReactComponent as GradeSvg } from "../../../assets/icons/grade.svg";
import { ReactComponent as GroupSvg } from "../../../assets/icons/group.svg";
import { ReactComponent as LocationSvg } from "../../../assets/icons/location.svg";
import { ReactComponent as PaperSvg } from "../../../assets/icons/paper.svg";
import { ReactComponent as StarSvg } from "../../../assets/icons/star.svg";
import { ReactComponent as UploadSvg } from "../../../assets/icons/upload.svg";
import { ReactComponent as UserSvg } from "../../../assets/icons/user.svg";
import { ReactComponent as WriteSvg } from "../../../assets/icons/write.svg";

const Navbar = () => {
  interface IconItem {
    id: number;
    name: React.FC;
    url: string;
  }

  const listIconsNavbar: IconItem[] = [
    {
      id: 1,
      name: PaperSvg,
      url: "/profile",
    },
    {
      id: 2,
      name: UserSvg,
      url: "/group",
    },
    {
      id: 3,
      name: ChooseSvg,
      url: "/choose",
    },
    {
      id: 4,
      name: GroupSvg,
      url: "/people",
    },
    {
      id: 5,
      name: GradeSvg,
      url: "/grade",
    },
    {
      id: 6,
      name: WriteSvg,
      url: "/write",
    },
    {
      id: 7,
      name: StarSvg,
      url: "/star",
    },
    {
      id: 8,
      name: UploadSvg,
      url: "/upload",
    },
    {
      id: 9,
      name: BottleSvg,
      url: "/bottle",
    },
    {
      id: 10,
      name: LocationSvg,
      url: "/management",
    },
    {
      id: 11,
      name: ElectricSvg,
      url: "/electric",
    },
  ];

  return (
    <nav className="wrapper-navbar">
      <Link to="/">
        <img src={require("../../../assets/images/logo.png")} alt="logo" />
      </Link>
      <ul className="wrapper-navbar__icons">
        {listIconsNavbar &&
          listIconsNavbar.map((item) => {
            return (
              <li key={item.id}>
                <NavLink to={item.url}>
                  <item.name />
                </NavLink>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

export default Navbar;
