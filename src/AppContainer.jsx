import App from "./App";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    data: state.itemPage.data,
    teachers: state.itemPage.teachers,
    isSaving: state.itemPage.isSaving,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
 
  };
};

const ItemCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
export default ItemCardContainer;
