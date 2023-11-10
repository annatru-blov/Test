import axios from 'axios';
const ADD_TO_ITEM = "ADD_TO_ITEM";
const ADD_TO_TEACHERS = "ADD_TO_TEACHERS";
const SET_LECTURE_TEACHER = "SET_LECTURE_TEACHER";
const SET_LABORATORY_TEACHER = "SET_LABORATORY_TEACHER";
const SET_PRACTICE_TEACHER = "SET_PRACTICE_TEACHER";
const SET_SEMINAR_TEACHER = "SET_SEMINAR_TEACHER";
const SET_EXAM_TEACHER = "SET_EXAM_TEACHER";
const SET_OFFSET_TEACHER = "SET_OFFSET_TEACHER";
const SAVE_DATA_REQUEST = "SAVE_DATA_REQUEST";
const SAVE_DATA_SUCCESS = "SAVE_DATA_SUCCESS";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const UPDATE_NEW_MESSAGE_BODY_TWO = "UPDATE_NEW_MESSAGE_BODY_TWO";







let initialState = {
  data: [

  ],
  teachers: [],
  isSaving: false,
  newMessageBody: "11",
  messageBodyTwo: "11",
 
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: 
    return {
      ...state,
      newMessageBody: action.body
    };
    case UPDATE_NEW_MESSAGE_BODY_TWO:
      return {
        ...state,
        messageBodyTwo: action.body
      };
    case ADD_TO_ITEM: {
      return {
        ...state,
        data: action.data
      };
    }
    case ADD_TO_TEACHERS: {
      return {
        ...state,
        teachers: action.teachers
      };
    }
    case SET_LECTURE_TEACHER: {
      return {
      ...state,
      data: state.data.map((item) => {
      
          return {
            ...item,
            podgroups: item.podgroups.map((podgroup) => ({
              ...podgroup,
              lectureTeacher: action.teacherId,
            })),
          };
      }),
    };
    }
    case SET_LABORATORY_TEACHER: {
      return {
        ...state,
        data: state.data.map((item) => {
        
            return {
              ...item,
              podgroups: item.podgroups.map((podgroup) => ({
                ...podgroup,
                laboratoryTeacher: action.teacherId,
              })),
            };
        }),

      };
    }
    case SET_PRACTICE_TEACHER: {
      return {
        ...state,
        data: state.data.map((item) => {
        
            return {
              ...item,
              podgroups: item.podgroups.map((podgroup) => ({
                ...podgroup,
                practiceTeacher: action.teacherId,
              })),
            };
        }),
      };
    }
    case SET_SEMINAR_TEACHER: {
      return {
        ...state,
        data: state.data.map((item) => {
        
            return {
              ...item,
              podgroups: item.podgroups.map((podgroup) => ({
                ...podgroup,
                seminarTeacher: action.teacherId,
              })),
            };
        }),
        
      };
    }
    case SET_EXAM_TEACHER: {
      return {
        ...state,
        data: state.data.map((item) => {
        
            return {
              ...item,
              podgroups: item.podgroups.map((podgroup) => ({
                ...podgroup,
                examTeacher: action.teacherId,
              })),
            };
        }),
      };
    }
    case SET_OFFSET_TEACHER: {
      return {
        ...state,
        data: state.data.map((item) => {
        
            return {
              ...item,
              podgroups: item.podgroups.map((podgroup) => ({
                ...podgroup,
                offsetTeacher: action.teacherId,
              })),
            };
        }),
      };
    }
    case SAVE_DATA_REQUEST:
      return {
        ...state,
        isSaving: true,
        saveError: null,
      };
    case SAVE_DATA_SUCCESS:
      return {
        ...state,
        isSaving: false,
        saveError: null,
      };
 
    default:
      return state;
  }
};

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});
export const updateNewMessageBodyTwoCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY_TWO,
  body: body,
});
export const saveDataRequest = () => ({
  type: SAVE_DATA_REQUEST,
});

export const saveDataSuccess = () => ({
  type: SAVE_DATA_SUCCESS,
});
export const addDataToItemActionCreator = (data) => ({
  type: ADD_TO_ITEM,
  data,
});
export const addDataToTeachersActionCreator = (teachers) => ({
  type: ADD_TO_TEACHERS,
  teachers,
});
export const setLectureTeacher = (teacherId) => ({
  type: SET_LECTURE_TEACHER,
  teacherId,

});

// export const setLectureTeacher = (teacherId) => ({
//   type: SET_LECTURE_TEACHER,
//   teacherId,
// });
export const setLaboratoryTeacher = (teacherId) => ({
  type: SET_LABORATORY_TEACHER,
  teacherId,
});
export const setPracticeTeacher = (teacherId) => ({
  type: SET_PRACTICE_TEACHER,
  teacherId,
});
export const setSeminarTeacher = (teacherId) => ({
  type: SET_SEMINAR_TEACHER,
  teacherId,
});
export const setExamTeacher = (teacherId) => ({
  type: SET_EXAM_TEACHER,
  teacherId,
});
export const setOffsetTeacher = (teacherId) => ({
  type: SET_OFFSET_TEACHER,
  teacherId,
});


export const fetchDataFromServer = () => {

  return (dispatch) => {
    axios
      .get('https://bgaa.by/test')
      .then((response) => {
        dispatch(addDataToItemActionCreator(response.data.data));

      })
  };
};
export const fetchTeachersFromServer = () => {

  return (dispatch) => {
    axios
      .get('https://bgaa.by/test')
      .then((response) => {
        dispatch(addDataToTeachersActionCreator(response.data.teachers));
       // console.log(response.data);
      })
  };
};
export const saveDataToAPI = (data) => {
  return (dispatch) => {
    dispatch(saveDataRequest());
    axios
      .post("https://bgaa.by/test_result", { data }) 
      .then((response) => {
        dispatch(saveDataSuccess());
      })
  };
};
export default itemReducer;
