import './App.css';
import Header from "./MyComponents/Header";
import AddTodo from './MyComponents/AddTodo';
import Todo from "./MyComponents/Todo";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  let initTodo;
  if (localStorage.getItem('todos') === null) {
    // console.log("Todos is empty")
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }


  const Deleted = (todo) => {
    // console.log("I am on delete", todo);
    const updated = todos.filter((e) => {
      return e !== todo
    })
    setTodos(updated) // SetTodos use for update the array
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const allClear = () => {
    localStorage.clear()
    localStorage.setItem("todos", JSON.stringify(todos))

  }

  //------AddTodo Function
  function addTodo(title, desc) {
    // console.log("your title: ",title,"and your description: ", desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 2
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo])
    // console.log(myTodo)
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  const [todos, setTodos] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  return (
    <>
      <Router>
        <Header title='My Todos List' homeTitle="Home" aboutTitle="About" searchBar={true} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} allClear={allClear} />
                <Todo todos={todos} Deleted={Deleted} />
              </>
            )
          }}>
          </Route>
        </Switch>
      </Router>

    </>
  );
}

export default App;
