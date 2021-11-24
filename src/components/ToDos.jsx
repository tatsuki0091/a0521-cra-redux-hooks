import React from "react";
import { useDispatch } from "react-redux";
import { updateTodoAction } from "../redux/action/actions";

const ToDos = ({ todoArr }) => {
  const dispatch = useDispatch();
  const updateState = (event, id, isDone) => {
    dispatch(updateTodoAction({ id, isDone }));
    event.preventDefault();
  };

  return (
    <>
      {todoArr &&
        todoArr.map((todo) => (
          <div className="collection-item" key={todo.id}>
            <button
              style={{ background: "transparent", border: "#FFF" }}
              onClick={(event) => {
                updateState(event, todo.id, todo.isDone);
              }}
            >
              <span
                style={{
                  textDecoration: todo.isDone ? "line-through" : "none",
                }}
              >
                {todo.content}
              </span>
            </button>
          </div>
        ))}
    </>
  );
};

export default ToDos;
