let initialState = {
  quote: [
    {
      id: new Date().getTime().toString(),
      quote: "Power is the only truth",
      author: "Yogiraj Shri Shailendra Sharma",
    },
    {
      id: new Date().getTime().toString(),
      quote: "Power is the only truth",
      author: "Yogiraj Shri Shailendra Sharma",
    },
  ],
};
const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return { state };
    case "DELETE":
      return { state };
    case "EDIT":
      return { state };
    default:
      return state;
  }
};

export default quoteReducer;
