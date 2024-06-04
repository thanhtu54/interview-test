import { useState } from "react";
import Table from "../table";
import { ReactComponent as CallSvg } from "../../assets/icons/call.svg";
import { ReactComponent as FilterSvg } from "../../assets/icons/filter.svg";
import { ReactComponent as GroupSvg } from "../../assets/icons/group.svg";
import { ReactComponent as MessageSvg } from "../../assets/icons/message.svg";
import { ReactComponent as PlusSvg } from "../../assets/icons/plus.svg";
import { ReactComponent as SearchSvg } from "../../assets/icons/search.svg";

const TaskPage = () => {
  const [totalTask, setTotalTask] = useState(0);

  return (
    <div className="wrapper-task">
      <div className="wrapper-task__function">
        <div className="wrapper-task__function__add">
          <button>
            <PlusSvg />
            <span>Ajouter une tâche</span>
          </button>
          <span>{`Total: ${totalTask} task`}</span>
        </div>
        <div className="wrapper-task__function__filter">
          <div className="wrapper-task__function__filter__select">
            <FilterSvg />
            <select>
              <option value="">Plus de filtre</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div className="wrapper-task__function__filter__select">
            <GroupSvg />
            <select>
              <option value="">Tout le monde</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div className="wrapper-task__function__filter__search">
            <SearchSvg />
            <input type="text" placeholder="Titre, contact, responsable..." />
          </div>
        </div>
      </div>
      <div className="wrapper-task__infor">
        <span>Tout</span>
        <hr />
        <div className="wrapper-task__infor__message">
          <MessageSvg />
          <span>Appel</span>
        </div>
        <div className="wrapper-task__infor__call">
          <CallSvg />
          <span>E-mail</span>
        </div>
        <hr />
        <span>À faire</span>
        <span>En retard</span>
        <span>Aujourd’hui</span>
        <span>Demain</span>
        <hr />
        <span>P1</span>
        <span>P2</span>
        <span>P3</span>
      </div>
      <div className="wrapper-task__table">
        <Table setTotalTask={setTotalTask} />
      </div>
    </div>
  );
};

export default TaskPage;
