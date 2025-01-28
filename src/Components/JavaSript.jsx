import React from "react";
import CSV from "../assets/file.json";
const JavaSript = () => {
  const input = "ahmed ali 12345567";
  return (
    <div>
      <h1>JavaScript Questions</h1>
      <div>
        <h2>Reverse String</h2>
        {<p>Original : {input}</p>}
        <p>Reverse : {input.split("").reverse().join("")}</p>
      </div>
      <div>
        <h2> Read text file Count</h2>
        {input.toString("").split("").length}
      </div>
      <div>
        <h2>JSON to CSV</h2>
        {
          <table border={1}>
            <thead>
              <tr>
                <td>
                  <h1>Id</h1>
                </td>
                <td>
                  <h1>Name</h1>
                </td>
                <td>
                  <h1>Role</h1>
                </td>
                <td>
                  <h1>Phone</h1>
                </td>
              </tr>
            </thead>
            {CSV?.map((item) => (
              <tbody key={item.id}>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.Role}</td>
                  <td>{item.phone}</td>
                </tr>
              </tbody>
            ))}
          </table>
        }
      </div>
    </div>
  );
};

export default JavaSript;
