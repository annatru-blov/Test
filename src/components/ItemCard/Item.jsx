import React from "react";
import "./ItemCard.css";
import { BsFillBookFill } from "react-icons/bs";
import Table from "./Table";

function Item({ item, teachers, message, message2 }) {
  

  return (
    <div className="card">
      <h1 className="card-title">
        <div className="icon-book">
          <BsFillBookFill />
        </div>
        Конкретная авиационная техника
      </h1>
      <div className="block-group">
        <div className="groupName-title">Группа</div>
        <div className="value-name">{item.groupName}</div>
        <div className="groupName-title">Курс</div>
        <div className="value-name">{item.course}</div>
        <div className="groupName-title">Количество курсантов</div>
        <div className="value-name">{item.studentsNumber}</div>
        <div className="groupName-title">Семестр</div>
        <div className="value-name">{item.semestr}</div>
      </div>
      <Table teachers={teachers} item={item} message={message} message2={message2}/>
    </div>
  );
}
export default Item;
