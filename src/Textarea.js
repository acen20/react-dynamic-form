import React from "react";

function Textarea({ field, validate }) {
  return (
    <>
      <textarea
        className="review-input"
        id={field.id}
        name={field.id}
        required={field.required}
        onInput={validate}
        placeholder={field.title}
      ></textarea>
    </>
  );
}

export default Textarea;
