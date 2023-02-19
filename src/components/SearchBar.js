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
    <nav className="mt-4 mb-4">
      <div className="field has-addons box">
        <div className="control is-expanded">
          <input
            className="input is-primary"
            type="text"
            placeholder="Search Images"
            onChange={handleChange}
            value={term}
          ></input>
        </div>
        <div className="control">
          <div onClick={handleSubmit} className="buttons">
            <button className="button is-primary">Submit</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default SearchBar;
