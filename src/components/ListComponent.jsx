import React from "react";
import "../styles/ListStyles.css";

export const List = (props) =>
  props.tasks.map((item) => (
    <div className="list-background">
      <p className="list__items" key={item.id}>
        <strong> {item.value}</strong>
      </p>
      <i
        className="fa fa-trash fa-lg list__delete-icon"
        onClick={() => props.deleteItem(item.id)}
      />
    </div>
  ));
