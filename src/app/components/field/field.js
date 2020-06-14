import React from 'react';
import style from "./field.module.css"


function Field({value,icon,width,validation}) {
  return (
  <>
  <input className = {style.input} type = {(value === "Password" ? "password" : "text")} placeholder = {value} style = {{backgroundImage: `url(${icon})`}}/> 
  </>
  );
}

export default Field;