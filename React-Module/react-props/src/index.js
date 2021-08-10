import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img
        src={props.url}
        alt={props.alt_url}
      />
      <p>{props.phone}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card 
    name="Jack" 
    url="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
    alt_url = "avatar_img"
    phone = "555555"
    />
    <Card 
    name="HOKJK" 
    url="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
    alt_url = "avatar_img"
    phone = "555555"
    />
  </div>,
  document.getElementById("root")
);
