import React from "react";

function Search(props) {
  return (
    <div className="container w-50 my-5">
      <form onSubmit={props.onClick}>
        <div className="form-group input-group input-group-lg">
          <input
            type="text"
            className="form-control border rounded-pill border-dark"
            value={props.value}
            onChange={props.onChange}
            placeholder="Enter book name here"
            required
          />
        </div>
        <button
          className="btn float-right btn-lg btn-warning border py-2 px-5 rounded-pill"
          type="submit"
        >
          <i className="fas fa-search mr-1"></i>
          Search
        </button>
      </form>
      <br />
    </div>
  );
}

export default Search;
