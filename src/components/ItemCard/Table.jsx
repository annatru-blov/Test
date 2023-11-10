import React from "react";
import { useState } from "react";
import { setLectureTeacher, setLaboratoryTeacher, setPracticeTeacher, setSeminarTeacher, setExamTeacher, setOffsetTeacher} from "./../../redux/item-reducer";
import { useDispatch } from "react-redux";
import TableA from "./TableA";
import sort from "./../../img/free-icon-sorting-3489483.png";

function Table({ teachers, item, message, message2 }) {
  const dispatch = useDispatch();
  
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [showTeacherTable, setShowTeacherTable] = useState(true);
  

 
  const handleTeacherChange = (event) => {
    setSelectedTeacher(event.target.value);
    const Teacher = teachers.find(
      (teacher) => teacher.name === event.target.value
    );
    if (Teacher) {
      const selectedTeacherId = Teacher.id;
      dispatch(setLectureTeacher(selectedTeacherId));
  
    }
  };
  const handleLaboratoryTeacherChange = (event) => {
   
    const Teacher = teachers.find(
      (teacher) => teacher.name === event.target.value
    );
    if (Teacher) {
      const selectedTeacherId = Teacher.id;
      dispatch(setLaboratoryTeacher(selectedTeacherId));
  
    }
  };
  const handlePracticeTeacherChange = (event) => {
    const Teacher = teachers.find(
      (teacher) => teacher.name === event.target.value
    );
    if (Teacher) {
      const selectedTeacherId = Teacher.id;
      dispatch(setPracticeTeacher(selectedTeacherId));
  
    }
  };
  const handleSeminarTeacherChange = (event) => {
    const Teacher = teachers.find(
      (teacher) => teacher.name === event.target.value
    );
    if (Teacher) {
      const selectedTeacherId = Teacher.id;
      dispatch(setSeminarTeacher(selectedTeacherId));
    }
  };
  const handleExamTeacherChange = (event) => {
    const Teacher = teachers.find(
      (teacher) => teacher.name === event.target.value
    );
    if (Teacher) {
      const selectedTeacherId = Teacher.id;
      dispatch(setExamTeacher(selectedTeacherId));
    }
  };
  const handleOffsetTeacherChange = (event) => {
  
    const Teacher = teachers.find(
      (teacher) => teacher.name === event.target.value
    );
    if (Teacher) {
      const selectedTeacherId = Teacher.id;
      dispatch(setOffsetTeacher(selectedTeacherId));
    }
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

  const toggleTable = () => {
    setShowTeacherTable(!showTeacherTable);
  };
 
  return (
    <>
      {showTeacherTable ? (
        <div className="custom-table"  data-unique-id={item.uniqueId}>
          <div className="title-table">
            <div className="title-text">Занятие</div>
            <div className="title-text">Часы</div>

            <div className="block-add">
              <div className="teacher-text">Преподаватель</div>
              <div className="button-add" onClick={toggleTable}>
                +
              </div>
            </div>
          </div>

          {item.lecturesHours === "0" ? (
            <div className="title-table" > 
              <div className="title-lect">Лекции</div>
              <div className="title-hours">{item.lecturesHours}</div>
              <div className="title-select">
                <select disabled value="Вакансия" className="select-teachers">
                  <option value="">Вакансия</option>
                  {teachers.map((teacher) => (
                    <option
                      key={teacher.id}
                      value={teacher.name}
                      onChange={handleTeacherChange}
                    >
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
                  className="select-teachers"
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
            </div>
          )}

          {item.laboratoryHours === "0" ? (
            <div className="title-table">
              <div className="title-lect">Лабораторные работы</div>

              <div className="title-hours">{item.laboratoryHours}</div>
              <div className="title-select">
                <select disabled value="Вакансия" className="select-teachers" onChange={handleLaboratoryTeacherChange}>
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
                <select className="select-teachers" onChange={handleLaboratoryTeacherChange}>
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
                <select disabled value="Вакансия" className="select-teachers" onChange={handlePracticeTeacherChange}>
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
                <select className="select-teachers" onChange={handlePracticeTeacherChange}>
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
                <select disabled value="Вакансия" className="select-teachers" onChange={handleSeminarTeacherChange}>
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
                <select className="select-teachers" onChange={handleSeminarTeacherChange}>
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
                <select className="select-teachers" onChange={handleExamTeacherChange}>
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
                <select className="select-teachers" onChange={handleOffsetTeacherChange}>
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
            <div className="title-lect">
              {" "}
              Примечание <br />
              (для составления расписания)
            </div>

            <div className="title-hours"></div>
            <div className="title-select">
              <textarea className="textarea"></textarea>
            </div>
          </div>
        </div>
      ) : null}
      {!showTeacherTable && <TableA teachers={teachers} item={item} message={message} message2={message2}/>}
    </>
  );
}


export default Table;
