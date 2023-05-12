const SET_KLINE_DATA = "SET_KLINE_DATA";
const UPDATE_KLINE_DATA = "UPDATE_KLINE_DATA";

export const setKlineData = (data) => ({
  type: SET_KLINE_DATA,
  payload: data,
});

export const UpdateKlineData = (update) => ({
  type: UPDATE_KLINE_DATA,
  payload: update,
});

export const SLETDATA = (state) => state.data;

const initialState = {
  data: [],
  update: {},
};

export const klineReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_KLINE_DATA:
      return { ...state, data: action.payload };
    case UPDATE_KLINE_DATA:
      return { ...state, update: action.payload };
    default:
      return state;
  }
};
