import { Button } from "@mui/material";
import React, { useReducer } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
export default function Home() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "minus":
        state = state.map((p) =>
          p.id === action.payload ? { ...p, count: p.count - 1 } : p
        );
        return state;
      case "plus":
        state = state.map((p) =>
          p.id === action.payload ? { ...p, count: p.count + 1 } : p
        );
        return state;
      default:
        return state;
    }
  };

  const [data, dispatch] = useReducer(reducer, [
    { id: 1, count: 0 },
    { id: 2, count: 0 },
    { id: 3, count: 0 },
    { id: 4, count: 0 },
  ]);

  const handleMinus = (id) => {
    console.log(id);
    dispatch({ type: "minus", payload: id });
  };
  const handlePlus = (id) => {
    dispatch({ type: "plus", payload: id });
  };
  return (
    <>
      {data.map((item) => (
        <div>
          <Button
            variant="contained"
            color="error"
            onClick={() => handleMinus(item.id)}
          >
            <FaMinus />
          </Button>
          <h1> count: {item.count} </h1>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handlePlus(item.id)}
          >
            <FaPlus />
          </Button>
        </div>
      ))}
    </>
  );
}
