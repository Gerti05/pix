import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
  };

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="input is-primary"
          type="text"
          placeholder="Primary input"
          onChange={handleChange}
          value={term}
        ></input>
        <div onClick={handleSubmit} className="buttons">
          <button className="button is-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
