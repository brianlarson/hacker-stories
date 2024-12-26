import * as React from "react";
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

  const [searchTerm, setSearchTerm] = React.useState("");

  const handleChange = (e) => setSearchTerm(e.target.value);

  const searchedStories = stories.filter((story) => {
    const title = story.title.toLowerCase();
    const term = searchTerm.toLowerCase();
    return title.includes(term);
  });

  return (
    <div>
      <h1>{getTitle("Hello React")}</h1>

      <Search searchTerm={searchTerm} handleChange={handleChange} />

      <hr />

      <List list={searchedStories} />
    </div>
  );
};

const Search = ({ searchTerm, handleChange }) => {
  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input
        onChange={handleChange}
        value={searchTerm}
        id="search"
        type="text"
      />
      <p>
        Searching for <b>{searchTerm}</b>
      </p>
    </div>
  );
};

const List = ({ list }) => {
  return (
    <ul>
      {list.map(({ objectID, ...item }) => (
        <Item key={objectID} {...item} />
      ))}
    </ul>
  );
};

const Item = ({ title, url, author, num_comments, points }) => {
  return (
    <li>
      <span>
        <a href={url}>{title}</a>
      </span>
      <span> {author}</span>
      <span> {num_comments}</span>
      <span> {points}</span>
    </li>
  );
};

export default App;
