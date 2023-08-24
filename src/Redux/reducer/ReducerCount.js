import { Types } from "../action/actionTypes";

const initialState = {
  data: [
    {
      id: 1,
      count: 0,
      name: "acer",
    },
    {
      id: 2,
      count: 0,
      name: "msi",
    },
    {
      id: 3,
      count: 0,
      name: "hp",
    },
    {
      id: 4,
      count: 0,
      name: "lenova",
    },
    {
      id: 5,
      count: 0,
      name: "victus",
    },
  ],
};

const ReducerCount = (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.plus:
      let m = state.data.map((o) =>
        o.id === payload ? { ...o, count: o.count + 1 } : o
      );
      return {
        ...state,
        data: m,
      };
    case Types.minus:
      return {
        ...state,
        data: state.data.map((p) =>
          p.id === payload ? { ...p, count: p.count - 1 } : p
        ),
      };
    case Types.del:
      return {
        ...state,
        data: state.data.filter((i) => i.id !== payload),
      };
    default:
      return state;
  }
};

export default ReducerCount;
