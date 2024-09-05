// src/redux/userSlice.js

const initialStore = {
    datas: [],
  };
  
  export function userSlice(state = initialStore, action) {
    switch (action.type) {
      case "ADD":
        return { ...state, datas: [...state.datas, action.payload] };
  
      case "REMOVE":
        return {
          ...state,
          datas: state.datas.filter((e) => e.id !== action.payload),
        };
      default:
        return state;
    }
  }
  