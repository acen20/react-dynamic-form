import React from "react";
import { useState } from "react";
import Data from "./data.json";
import Select from "./Select";
import Text from "./Text";
import Textarea from "./Textarea";
import "./Review.css";

function Review() {
  const [idx, setIdx] = useState(0);
  const selector = Data["review-types"];
  const handleForm = (e) => {
    setIdx(e.target.selectedIndex);
  };
  const validate = () => {
    console.log("aagya");
  };
  return (
    <div className="review">
      <b>New Review</b>
      <hr />
      <form className="review-form">
        <Select selector={selector} parent handleForm={handleForm} idx={idx} />
        {selector[idx].fields?.map((field) => {
          if (field.type == "select")
            return (
              <Select key={field.id} selector={field} validate={validate} />
            );
          else if (field.type == "text")
            return <Text key={field.id} field={field} validate={validate} />;
          else if (field.type == "textarea")
            return (
              <Textarea key={field.id} field={field} validate={validate} />
            );
        })}
      </form>
      <input className="submit-btn" type="submit" value="Done" disabled />
    </div>
  );
}

export default Review;
