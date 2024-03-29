import React from "react";

function Alert(props) {
  return (
    props.alert && (
      <div
        className="position-absolute"
        style={{ height: "80px", color: "red" }}
      >
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
          style={{ height: "80px" }}
        >
          <strong>{props.alert.type}</strong>:{props.alert.msg}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </div>
    )
  );
}

export default Alert;
