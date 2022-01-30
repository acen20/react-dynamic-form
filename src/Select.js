import React from "react";

function Select({ selector, parent, handleForm, idx, validate }) {
  return (
    <>
      {parent ? (
        <select
          className="review-input"
          defaultValue={selector[idx].title}
          required={selector.required}
          onChange={handleForm}
        >
          {selector.map((field) => {
            return (
              <option key={field.id} id={field.id}>
                {field.title}
              </option>
            );
          })}
        </select>
      ) : (
        <select
          className="review-input"
          id={selector.id}
          defaultValue={selector.title}
          required={selector.required}
          onChange={validate}
        >
          <option key={selector.title} disabled>
            {selector.title}
          </option>
          {selector.options?.map((field) => {
            return (
              <option key={field.id} id={field.id}>
                {field}
              </option>
            );
          })}
        </select>
      )}
    </>
  );
}

export default Select;
