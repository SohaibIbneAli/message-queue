import React from "react";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showNotification } from "./redux/actions";
import Notification from "./notifications";

function Text() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.Message);
  const [text, setText] = useState();
  function onClick() {
    let temp = [...message];
    temp.push(text);
    dispatch(showNotification(temp));
    setText("");
  }
  return (
    <>
      <button onClick={onClick} type="submit">
        Click
      </button>
      <textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></textarea>
      {message.map((item, index) => (
        <Notification key={index} message={item} />
      ))}
    </>
  );
}

export default Text;
