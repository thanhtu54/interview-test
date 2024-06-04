import React, { Fragment, useEffect, useState } from "react";
import { NUMBER_TASK_OF_PAGE } from "../../utils/constant";
import { ReactComponent as CallSvg } from "../../assets/icons/call.svg";
import { ReactComponent as CheckSvg } from "../../assets/icons/check.svg";
import { ReactComponent as CircleSvg } from "../../assets/icons/circle.svg";
import { ReactComponent as LeftSvg } from "../../assets/icons/left.svg";
import { ReactComponent as MessageSvg } from "../../assets/icons/message.svg";
import { ReactComponent as RightSvg } from "../../assets/icons/right.svg";

const Table = ({
  setTotalTask,
}: {
  setTotalTask: React.Dispatch<React.SetStateAction<number>>;
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [status, setStatus] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  interface TaskItem {
    id: number;
    done: boolean;
    title: string;
    endDay: string;
    email: string;
    phone: number;
    status: number;
    contact: string;
    startDay: string;
  }

  const dataTask: TaskItem[] = [
    {
      id: 1,
      done: true,
      title: "task1",
      endDay: "29/06/2023 15:10:50",
      email: "email1@gmail.com",
      phone: 688652687,
      status: 0,
      contact: "person1",
      startDay: "29/06/2023 15:10:50",
    },
    {
      id: 2,
      done: false,
      title: "task2",
      endDay: "29/06/2023 15:10:50",
      email: "email2@gmail.com",
      phone: 688652687,
      status: 1,
      contact: "person2",
      startDay: "29/06/2023 15:10:50",
    },
    {
      id: 3,
      done: false,
      title: "task3",
      endDay: "29/06/2023 15:10:50",
      email: "email3@gmail.com",
      phone: 688652687,
      status: 0,
      contact: "person3",
      startDay: "29/06/2023 15:10:50",
    },
    {
      id: 4,
      done: true,
      title: "task4",
      endDay: "29/06/2023 15:10:50",
      email: "email4@gmail.com",
      phone: 688652687,
      status: 1,
      contact: "person4",
      startDay: "29/06/2023 15:10:50",
    },
    {
      id: 5,
      done: false,
      title: "task5",
      endDay: "29/06/2023 15:10:50",
      email: "email5@gmail.com",
      phone: 688652687,
      status: 0,
      contact: "person5",
      startDay: "29/06/2023 15:10:50",
    },
    {
      id: 6,
      done: true,
      title: "task6",
      endDay: "29/06/2023 15:10:50",
      email: "email6@gmail.com",
      phone: 688652687,
      status: 1,
      contact: "person6",
      startDay: "29/06/2023 15:10:50",
    },
    {
      id: 7,
      done: true,
      title: "task7",
      endDay: "29/06/2023 15:10:50",
      email: "email7@gmail.com",
      phone: 688652687,
      status: 0,
      contact: "person7",
      startDay: "29/06/2023 15:10:50",
    },
    {
      id: 8,
      done: true,
      title: "task8",
      endDay: "29/06/2023 15:10:50",
      email: "emai87@gmail.com",
      phone: 688652687,
      status: 1,
      contact: "person8",
      startDay: "29/06/2023 15:10:50",
    },
    {
      id: 9,
      done: false,
      title: "task9",
      endDay: "29/06/2023 15:10:50",
      email: "emai9@gmail.com",
      phone: 688652687,
      status: 0,
      contact: "person9",
      startDay: "29/06/2023 15:10:50",
    },
    {
      id: 10,
      done: false,
      title: "task10",
      endDay: "29/06/2023 15:10:50",
      email: "email10@gmail.com",
      phone: 688652687,
      status: 0,
      contact: "person10",
      startDay: "29/06/2023 15:10:50",
    },
    {
      id: 11,
      done: false,
      title: "task11",
      endDay: "29/06/2023 15:10:50",
      email: "email11@gmail.com",
      phone: 688652687,
      status: 1,
      contact: "person11",
      startDay: "29/06/2023 15:10:50",
    },
    {
      id: 12,
      done: false,
      title: "task12",
      endDay: "29/06/2023 15:10:50",
      email: "email12@gmail.com",
      phone: 688652687,
      status: 1,
      contact: "person12",
      startDay: "29/06/2023 15:10:50",
    },
  ];

  useEffect(() => {
    setTotalTask(dataTask?.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setTotalTask]);

  const handleNext = () => {
    if (currentPage < Math.floor(dataTask?.length / NUMBER_TASK_OF_PAGE) + 1)
      setCurrentPage((cur) => cur + 1);
  };

  const handleBack = () => {
    if (currentPage > 1) {
      setCurrentPage((cur) => cur - 1);
    }
  };

  return (
    <Fragment>
      <table className="wrapper-table">
        <thead>
          <tr>
            <th>
              <CheckSvg />
            </th>
            <th>Réalisé</th>
            <th>Titre</th>
            <th>Date d'échéance</th>
            <th>Email</th>
            <th>Opportunité</th>
            <th>Statut</th>
            <th>Contact associé</th>
            <th>Responsable</th>
            <th>Date de création</th>
          </tr>
        </thead>
        <tbody>
          {dataTask &&
            dataTask.map((item, index) => {
              if (
                index > NUMBER_TASK_OF_PAGE * (currentPage - 1) &&
                index < NUMBER_TASK_OF_PAGE * currentPage
              ) {
                return (
                  <tr key={item.id}>
                    <td>
                      <CheckSvg />
                    </td>
                    <td className={`${item.done ? "active" : ""}`}>
                      <CircleSvg />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.endDay}</td>
                    <td>
                      <MessageSvg />
                      <span>{item.email}</span>
                    </td>
                    <td>
                      <CallSvg />
                      <span>{item.phone}</span>
                    </td>
                    <td>
                      <select
                        id="select-option"
                        defaultValue={item.status ? "appel" : "busy"}
                        onChange={(e) =>
                          setStatus(e.target.value === "appel" ? 0 : 1)
                        }
                      >
                        <option value="appel">Appel</option>
                        <option value="busy">Busy</option>
                      </select>
                    </td>
                    <td>{item.contact}</td>
                    <td>
                      <img
                        src={require("../../assets/images/ava.png")}
                        alt="avatar"
                      />
                      <span>Sébastien</span>
                    </td>
                    <td>{item.endDay}</td>
                  </tr>
                );
              } else return null;
            })}
        </tbody>
      </table>
      <div className="pagination">
        <LeftSvg onClick={handleBack} />
        <span>{currentPage}</span>
        <span>de</span>
        <span>{Math.floor(dataTask?.length / NUMBER_TASK_OF_PAGE) + 1}</span>
        <RightSvg onClick={handleNext} />
      </div>
    </Fragment>
  );
};

export default Table;
