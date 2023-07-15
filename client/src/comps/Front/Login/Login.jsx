import React from "react";
import Register from "../Register/Register";

export default function Login() {
  return (
    <div className="LoginComp combineW combineH">
      <Register excludeInputs={["username", "confirmPassword", "date"]} />
    </div>
  );
}
