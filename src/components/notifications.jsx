import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeNotification } from "./redux/actions";
export default function Notification(props) {
  const dispatch = useDispatch();
  useEffect(() => {
 
    setTimeout(() => {
      dispatch(removeNotification(props.message));
    }, 5000);
  }, []);

  return <div style={{ background: "blue" }}>{props.message}</div>;
}
