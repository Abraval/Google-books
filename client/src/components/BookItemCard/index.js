import React from "react";
import "./style.css";

function BookItemCard(props) {
  return (
    <div className="container">
    <div className="card result-card mb-3 py-5 px-5">
      <div className="row no-gutters">
        <div className="col">
          <img
            src={props.thumbnail}
            className="card-img border border-dark img-fluid"
            alt={props.title}
            style={{ width: "200px" }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title bg-dark text-white py-2 px-4">{props.title}</h5>
            <h6 className="card-text text-dark my-2"><span className="font-weight-bold">Written By: </span>{props.author}</h6>
            <p className="card-text text-secondary"><span className="font-weight-bold">Desc:</span> {props.description}</p>
          </div>
       
            <a
              href={props.href}
              target="_blank"
              className="btn btn-lg btn-outline-dark float-right mr-5 border-dark py-2 px-5 rounded-pill"
              role="button"
            >
              View
            </a>
            {window.location.pathname === "/" ? (
              <span
                data-index={props.index}
                className="save btn btn-lg mx-3 btn-primary float-right border-primary py-2 px-5 rounded-pill"
                onClick={props.save}
              >
                Save
              </span>
            ) : (
              <span
                data-index={props.index}
                className="delete btn mx-3 btn-lg btn-danger float-right border-danger py-2 px-5 rounded-pill"
                onClick={props.delete}
              >
                Delete
              </span>
            )}
          </div>
        </div>
      </div>
      </div>
  
  );
}

export default BookItemCard;
