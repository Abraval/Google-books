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
            className="card-img shadow-lg img-fluid"
            alt={props.title}
            style={{ width: "200px" }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title bg-dark text-white py-2 px-4">{props.title}</h5>
            <h6 className="card-text text-dark my-2"><span className="font-weight-bold">Written By: </span>{props.author}</h6>
            <p className="card-text"><span className="font-weight-bold">Desc:</span> {props.description}</p>
          </div>
       
            <a
              href={props.href}
              target="_blank"
              className="btn btn-outline-dark float-right mr-5"
              role="button"
            >
              View
            </a>
            {window.location.pathname === "/" ? (
              <span
                data-index={props.index}
                className="save btn mx-3 btn-success float-right"
                onClick={props.save}
              >
                Save
              </span>
            ) : (
              <span
                data-index={props.index}
                className="delete btn mx-3 btn-danger float-right"
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
