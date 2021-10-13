import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { v1 as uuidv1 } from "uuid";
//import { button } from "button";
///import { FaBeer } from "react-icons/fa";

const TodoPage = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoText, setTodoText] = useState("");
  const [isToggleEdit, setIsToggleEdit] = useState(false);
  const [editableTextId, setEditableTextId] = useState("");

  useEffect(() => {
    const todoList = JSON.parse(localStorage.getItem("todoList"));
    if (todoList) {
      setTodoList(todoList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    AddTodoItem(todoText);
    setTodoText("");
    setEditableTextId("");
    setIsToggleEdit(false);
  };

  const AddTodoItem = (todoText) => {
    const newTodoList = [...todoList, { todoText, id: uuidv1() }];
    // newTodoList.push(item);
    setTodoList(newTodoList);
  };

  const deleteTodoItem = (uniquekey) => {
    const index = todoList.findIndex((todoList) => todoList.id === uniquekey);
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  const editButtonClicked = (item) => {
    setIsToggleEdit(true);
    setTodoText(item.todoText);
    setEditableTextId(item.id);
    deleteTodoItem(item.id);
  };

  const editTodoItem = () => {
    const newTodoList = [...todoList, { todoText, id: editableTextId }];
    setTodoList(newTodoList);
    setTodoText("");
    setEditableTextId("");
    setIsToggleEdit(false);
  };

  return (
    <div>
      <TodoForm
        todoText={todoText}
        editTodoItem={editTodoItem}
        isToggleEdit={isToggleEdit}
        setTodoText={setTodoText}
        handleFormSubmit={handleFormSubmit}
      />
      <div>
        {todoList.map((item) => (
          <Todo
            item={item}
            key={item.id}
            uniquekey={item.id}
            deleteTodoItem={deleteTodoItem}
            editButtonClicked={editButtonClicked}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoPage;
