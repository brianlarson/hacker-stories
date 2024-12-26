import { useState } from "react";
import "./App.css";

function getTitle(title) {
  return title;
}

const App = () => {
  const stories = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];
  return (
    <div>
      <h1>{getTitle("Hello React")}</h1>

      <Search />

      <hr />

      <List list={stories} />
    </div>
  );
};

const Search = () => {
  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" />
    </div>
  );
};

const List = (props) => {
  return (
    <ul>
      {props.list.map(function (item) {
        return <Item key={item.objectID} item={item} />;
      })}
    </ul>
  );
};

const Item = (props) => {
  return (
    <li>
      <span>
        <a href={props.item.url}>{props.item.title}</a>
      </span>
      <span>{props.item.author}</span>
      <span>{props.item.num_comments}</span>
      <span>{props.item.title}</span>
      <span>{props.item.points}</span>
    </li>
  );
};

export default App;
