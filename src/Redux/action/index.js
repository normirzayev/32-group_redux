import { Types } from "./actionTypes";

export const PlusFunc = (id) => {
  return {
    type: Types.plus,
    payload: id,
  };
};

export const MinusFunc = (id) => {
  return {
    type: Types.minus,
    payload: id,
  };
};

export const deleteFn = (id) => {
  return {
    type: Types.del,
    payload: id,
  };
};
