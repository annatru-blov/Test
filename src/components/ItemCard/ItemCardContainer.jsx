import { fetchDataFromServer, fetchTeachersFromServer, updateNewMessageBodyCreator} from "./../../redux/item-reducer";
import ItemCard from "./ItemCard";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    data: state.itemPage.data,
    teachers: state.itemPage.teachers,
    message: state.itemPage.newMessageBody,
    message2: state.itemPage.messageBodyTwo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDataFromServer: (data) => dispatch(fetchDataFromServer(data)),
    fetchTeachersFromServer: (teachers) => dispatch(fetchTeachersFromServer(teachers)),
    updateNewMessageBodyCreator: (body) => { dispatch(updateNewMessageBodyCreator(body));},
  };
};

const ItemCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemCard);
export default ItemCardContainer;
