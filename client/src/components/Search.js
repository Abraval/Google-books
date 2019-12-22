import React from "react";

function SearchCard(props) {
  return (
    <div className="container w-50 mt-3">
      <div className="card border-0">
        <div className="card-body">
          <form onSubmit={props.onClick}>
            <div className="form-group input-group input-group-lg shadow">
              <input
                type="text"
                className="form-control border rounded border-dark"
                value={props.value}
                onChange={props.onChange}
                placeholder="Enter book name here"
                required
              />
            </div>
            <button className="btn float-right btn-dark shadow" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchCard;
