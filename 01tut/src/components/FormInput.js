import React, { useState } from "react";

export default function FormInput() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [skills, setSkills] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`${name} ${address} ${skills}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>
        </div>
        <div>
          <label>
            Address:
            <input
              type="text"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </label>
        </div>
        <div>
          <label>Skills</label>
          <select
            value={skills}
            onChange={(e) => {
              setSkills(e.target.value);
            }}
          >
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">VueJs</option>
          </select>
        </div>
        <button type="submit" value="submit">
          Submit Button
        </button>
      </form>
    </div>
  );
}
