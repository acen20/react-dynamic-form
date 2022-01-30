import React from "react";

function Text({ field, validate }) {
  return (
    <>
      <input
        className="review-input"
        id={field.id}
        type={field.type}
        name={field.id}
        required={field.required}
        onInput={validate}
      />
    </>
  );
}

export default Text;
