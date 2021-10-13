import { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";

const TodoForm = ({
  setTodoText,
  handleFormSubmit,
  todoText,
  isToggleEdit,
  editTodoItem,
}) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
        }}
      >
        <input
          style={{ width: "100%", padding: 10 }}
          type="text"
          onChange={(e) => setTodoText(e.target.value)}
          value={todoText}
          placeholder="Add todo item"
        ></input>
        {isToggleEdit ? (
          <EditIcon
            style={{
              textAlign: "right",
              padding: 10,
              minWidth: 40,
              position: "absolute",
            }}
            onClick={() => editTodoItem()}
          />
        ) : (
          <AddIcon
            style={{
              textAlign: "right",
              padding: 10,
              minWidth: 40,
              position: "absolute",
            }}
            onClick={(e) => handleFormSubmit(e)}
          />
        )}
      </div>
    </form>
  );
};

export default TodoForm;
