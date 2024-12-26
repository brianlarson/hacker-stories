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

const List = ({ list }) => {
  return (
    <ul>
      {list.map((item) => (
        <Item key={item.objectID} item={item} />
      ))}
    </ul>
  );
};

const Item = ({ item }) => {
  const { title, url, author, num_comments, points } = item;
  return (
    <li>
      <span>
        <a href={url}>{title}</a>
      </span>
      <span>{author}</span>
      <span>{num_comments}</span>
      <span>{points}</span>
    </li>
  );
};

export default App;
