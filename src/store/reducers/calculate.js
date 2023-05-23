const initiolState = {
  value: 100,
};

export const calculateReducer = (state = initiolState, { type, payload }) => {
  switch (type) {
    case "PLUS":
      return {
        ...state,
        value: state.value + payload,
      };
    case "MINUS":
      return {
        ...state,
        value: state.value - payload,
      };
    case "DIVISION":
      return {
        ...state,
        value: state.value / payload,
      };
    case "PLAS":
      return {
        ...state,
        value: state.value * payload,
      };
    default:
      return state;
  }
};
