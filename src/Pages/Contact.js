import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MinusFunc, PlusFunc, deleteFn } from "../Redux/action";
import { MdDelete } from "react-icons/md";
export default function Contact() {
  const { data } = useSelector((state) => state.ReducerCount);
  const dispatch = useDispatch();

  function handlePlus(id) {
    dispatch(PlusFunc(id));
  }
  // function handleMinus(id) {
  //   dispatch(MinusFunc(id));
  // }

  return (
    <div className="boxFlex">
      {data.map((item) => (
        <div key={item.id} className="boxItem">
          <Button
            variant="contained"
            color="error"
            onClick={() => dispatch(MinusFunc(item.id))}
          >
            <FaMinus />
          </Button>
          <h1> count: {item.count} </h1>
          <h2> name: {item.name} </h2>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handlePlus(item.id)}
          >
            <FaPlus />
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => dispatch(deleteFn(item.id))}
          >
            <MdDelete />
          </Button>
        </div>
      ))}
    </div>
  );
}
