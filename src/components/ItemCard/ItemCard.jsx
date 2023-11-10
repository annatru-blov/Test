import React, { useEffect } from "react";
import "./ItemCard.css";
import Item from "./Item";
import { fetchDataFromServer, fetchTeachersFromServer } from "./../../redux/item-reducer";
import { useDispatch } from "react-redux";

const ItemCard = ({ data, teachers, message, message2}) => {
  //console.log(data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataFromServer());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTeachersFromServer());
  }, [dispatch]);

  return (
    <div className="card-container ">
      {data.map((item, index) => (
        <div key={index}>
          <Item item={item} key={index} teachers={teachers} message={message} message2={message2}/>
        </div>
      ))}
    </div>
  );
};

export default ItemCard;
