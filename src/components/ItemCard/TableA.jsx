import React from "react";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { updateNewMessageBodyCreator, updateNewMessageBodyTwoCreator} from "./../../redux/item-reducer";
import { useDispatch } from "react-redux";
import Table from "./Table";
import sort from "./../../img/free-icon-sorting-3489483.png";

function TableA({ teachers, item, message, message2 }) {
  const dispatch = useDispatch();
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [showTable, setshowTable] = useState(true);
  

let [count,setCount] = useState(message);
let [count2,setCount2] = useState(message2);



useEffect(()=>{
  setCount(message);
},[message]);
useEffect(()=>{
  setCount2(message2);
},[message2]);

const deactivateEditMode = () => {
  dispatch(updateNewMessageBodyCreator(count));
};
const EditMode = () => {
  dispatch(updateNewMessageBodyTwoCreator(count2));
};
const onStatusChange = (e) => {
  setCount(e.currentTarget.value);
};
const onStatusChange2 = (e) => {
  setCount2(e.currentTarget.value);
};
  const handleTeacherChange = (event) => {
    setSelectedTeacher(event.target.value);
  };
  const handleSortClick = (uniqueId) => {
    const lectureInputs = document.querySelectorAll(`.custom-table[data-unique-id="${uniqueId}"] .select-teachers`);
    lectureInputs.forEach((input) => {
      if (!input.disabled) {
        input.value = selectedTeacher;
        setSelectedTeacher(selectedTeacher);
      }
    });
  };
  const settoggleTable = () => {
    setshowTable(!showTable);
  };
 
  return (
    <>
      {showTable ? (
        <div className="custom-table" data-unique-id={item.uniqueId}>
          <div className="title-table">
            <div className="title-text">Занятие</div>
            <div className="title-text">Часы</div>

            <div className="block-add">
              <div className="teacher-text">Подгруппа 1</div>
            </div>
            <div className="block-add">
              <div className="teacher-text">
                Подгруппа 2{" "}
                <MdDelete className="delete-button" onClick={settoggleTable} />
              </div>
            </div>
          </div>

          {item.lecturesHours === "0" ? (
            <div className="title-table">
              <div className="title-lect">Лекции</div>
              <div className="title-hours">{item.lecturesHours}</div>
              <div className="title-select">
                <select
                  disabled
                  value="Вакансия"
                  onChange={handleTeacherChange}
                  className="select-teachers"
                >
                  <option value="">Вакансия</option>
                  {teachers.map((teacher) => (
                    <option key={teacher.id} value={teacher.name}>
                      {teacher.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="title-select">
                <select
                  disabled
                  value="Вакансия"
                  onChange={handleTeacherChange}
                  className="select-teachers"
                >
                  <option value="">Вакансия</option>
                  {teachers.map((teacher) => (
                    <option key={teacher.id} value={teacher.name}>
                      {teacher.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ) : (
            <div className="title-table">
              <div className="title-lect">Лекции</div>
              <div className="title-hours">{item.lecturesHours}</div>
              <div className="title-select">
                <select
                  className="select-teachers active"
                  onChange={handleTeacherChange}
                  value={selectedTeacher}
                >
                  <option value="">Вакансия</option>
                  {teachers.map((teacher) => (
                    <option key={teacher.id} value={teacher.name}>
                      {teacher.name}
                    </option>
                  ))}
                </select>
                <div className="img-sort-block">
                  <img
                    src={sort}
                    alt="sort"
                    className="img-sort"
                    onClick={() => handleSortClick(item.uniqueId)}
                  />
                </div>
              </div>
              <div className="title-select">
                <select
                  className="select-teachers active"
                  onChange={handleTeacherChange}
                  value={selectedTeacher}
                >
                  <option value="">Вакансия</option>
                  {teachers.map((teacher) => (
                    <option key={teacher.id} value={teacher.name}>
                      {teacher.name}
                    </option>
                  ))}
                </select>
                <div className="img-sort-block">
                  <img
                    src={sort}
                    alt="sort"
                    className="img-sort"
                    onClick={handleSortClick}
                  />
                </div>
              </div>
            </div>
          )}

          {item.laboratoryHours === "0" ? (
            <div className="title-table">
              <div className="title-lect">Лабораторные работы</div>
              <div className="title-hours">{item.laboratoryHours}</div>
              <div className="title-select">
                <select
                  disabled
                  value="Вакансия"
                  onChange={handleTeacherChange}
                  className="select-teachers"
                >
                  <option value="">Вакансия</option>
                  {teachers.map((teacher) => (
                    <option key={teacher.id} value={teacher.name}>
                      {teacher.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="title-select">
                <select
                  disabled
                  value="Вакансия"
                  onChange={handleTeacherChange}
                  className="select-teachers"
                >
                  <option value="">Вакансия</option>
                  {teachers.map((teacher) => (
                    <option key={teacher.id} value={teacher.name}>
                      {teacher.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ) : (
            <div className="title-table">
              <div className="title-lect">Лабораторные работы</div>
              <div className="title-hours">{item.laboratoryHours}</div>
              <div className="title-select">
                <select className="select-teachers active">
                  <option value="">Вакансия</option>
                  {teachers.map((teacher) => (
                    <option key={teacher.id} value={teacher.name}>
                      {teacher.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="title-select">
                <select className="select-teachers active">
                  <option value="">Вакансия</option>
                  {teachers.map((teacher) => (
                    <option key={teacher.id} value={teacher.name}>
                      {teacher.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {item.practicHours === "0" ? (
            <div className="title-table">
              <div className="title-lect">Практические</div>

              <div className="title-hours">{item.practicHours}</div>
              <div className="title-select">
                <select
                  disabled
                  value="Вакансия"
                  onChange={handleTeacherChange}
                  className="select-teachers active"
                >
                  <option value="">Вакансия</option>
                  {teachers.map((teacher) => (
                    <option key={teacher.id} value={teacher.name}>
                      {teacher.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="title-select">
                <select
                  disabled
                  value="Вакансия"
                  onChange={handleTeacherChange}
                  className="select-teachers active"
                >
                  <option value="">Вакансия</option>
                  {teachers.map((teacher) => (
                    <option key={teacher.id} value={teacher.name}>
                      {teacher.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ) : (
            <div className="title-table">
              <div className="title-lect">Практические</div>
              <div className="title-hours">{item.practicHours}</div>
              <div className="title-select">
                <select className="select-teachers active">
                  <option value="">Вакансия</option>
                  {teachers.map((teacher) => (
                    <option key={teacher.id} value={teacher.name}>
                      {teacher.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="title-select">
                <select className="select-teachers active">
                  <option value="">Вакансия</option>
                  {teachers.map((teacher) => (
                    <option key={teacher.id} value={teacher.name}>
                      {teacher.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {item.seminarHours === "0" ? (
            <div className="title-table">
              <div className="title-lect">Семинарские</div>

              <div className="title-hours">{item.seminarHours}</div>
              <div className="title-select">
                <select
                  disabled
                  value="Вакансия"
                  onChange={handleTeacherChange}
                  className="select-teachers active"
                >
                  <option value="">Вакансия</option>
                  {teachers.map((teacher) => (
                    <option key={teacher.id} value={teacher.name}>
                      {teacher.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="title-select">
                <select
                  disabled
                  value="Вакансия"
                  onChange={handleTeacherChange}
                  className="select-teachers active"
                >
                  <option value="">Вакансия</option>
                  {teachers.map((teacher) => (
                    <option key={teacher.id} value={teacher.name}>
                      {teacher.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ) : (
            <div className="title-table">
              <div className="title-lect">Семинарские</div>
              <div className="title-hours">{item.seminarHours}</div>
              <div className="title-select">
                <select className="select-teachers active">
                  <option value="">Вакансия</option>
                  {teachers.map((teacher) => (
                    <option key={teacher.id} value={teacher.name}>
                      {teacher.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="title-select">
                <select className="select-teachers active">
                  <option value="">Вакансия</option>
                  {teachers.map((teacher) => (
                    <option key={teacher.id} value={teacher.name}>
                      {teacher.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {item.exam && (
            <div className="title-table">
              <div className="title-lect">Экзамен</div>

              <div className="title-hours"></div>
              <div className="title-select">
                <select className="select-teachers active">
                  <option value="">Вакансия</option>
                  {teachers.map((teacher) => (
                    <option key={teacher.id} value={teacher.name}>
                      {teacher.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="title-select">
                <select className="select-teachers active">
                  <option value="">Вакансия</option>
                  {teachers.map((teacher) => (
                    <option key={teacher.id} value={teacher.name}>
                      {teacher.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
          {item.offset && (
            <div className="title-table">
              <div className="title-lect">Зачет</div>
              <div className="title-hours"></div>
              <div className="title-select">
                <select className="select-teachers active">
                  <option value="">Вакансия</option>
                  {teachers.map((teacher) => (
                    <option key={teacher.id} value={teacher.name}>
                      {teacher.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="title-select">
                <select className="select-teachers active">
                  <option value="">Вакансия</option>
                  {teachers.map((teacher) => (
                    <option key={teacher.id} value={teacher.name}>
                      {teacher.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
          <div className="title-table">
            <div className="title-lect">Количество человек</div>
            <div className="title-hours"></div>
        
            <input type="text" className="title-select number" onBlur={deactivateEditMode}
              onChange={onStatusChange}
              value={count}/>
            <input type="text" className="title-select number" onBlur={EditMode}
              onChange={onStatusChange2}
              value={count2}/>
          </div>

          <div className="title-table">
            <div className="title-lect lectadd">
              Примечание <br />
              (для составления расписания)
            </div>

            <div className="title-hours hoursadd"></div>
            <div className="title-select textadd ">
              <textarea className="textarea"></textarea>
            </div>
          </div>
        </div>
      ) : null}
      {!showTable && <Table teachers={teachers} item={item} />}
    </>
  );
}
export default TableA;
