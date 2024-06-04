import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as ContactSvg } from "../../assets/icons/contact.svg";
import { ReactComponent as ListSvg } from "../../assets/icons/list.svg";
import { ReactComponent as SquareSvg } from "../../assets/icons/square.svg";
import { ReactComponent as TaskSvg } from "../../assets/icons/task.svg";

const Menu = () => {
  interface MenuItem {
    name: string;
    icon: React.FC;
    url: string;
  }

  const menuList: MenuItem[] = [
    {
      name: "Contacts",
      icon: ContactSvg,
      url: "/management/contact",
    },
    {
      name: "Listes",
      icon: ListSvg,
      url: "/management/list",
    },
    {
      name: "Opportunités",
      icon: SquareSvg,
      url: "/management/opportunites",
    },
    {
      name: "Tâches",
      icon: TaskSvg,
      url: "/management/task",
    },
  ];

  return (
    <nav className="wrapper-menu">
      <ul>
        {menuList &&
          menuList.map((item, index) => {
            return (
              <li key={index}>
                <NavLink to={item.url}>
                  <item.icon />
                  <span>{item.name}</span>
                </NavLink>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

export default Menu;
