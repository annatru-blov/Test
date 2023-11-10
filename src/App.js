import React from "react";
import ItemCardContainer from "./components/ItemCard/ItemCardContainer";
import "./index.css";
import { saveDataToAPI} from "./redux/item-reducer";
import { useDispatch } from "react-redux";

function App({data, isSaving}) {
  const dispatch = useDispatch();
 
  const handleSave = () => {
   
    const modifiedData = data;

    dispatch(saveDataToAPI(modifiedData));
    console.log(modifiedData);
   
  };

  return (
    <div className="App">
      <div className="wrapper-block">
        <div className="card-container">
          <ItemCardContainer />
        </div>
        <div className="button-block">
          <button className="button" onClick={handleSave} disabled={isSaving}>Сохранить</button>
        </div>
      </div>
    </div>
  );
}

export default App;
