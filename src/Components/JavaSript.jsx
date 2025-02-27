import React from "react";
import CSV from "../assets/file.json";
import { csvToArray } from "csvjson/src/helper";
const JavaSript = () => {
  
  const input = "ahmed ali 12345567";
  const string = "acbedf";
  const number = 1325476;
  const arrays = [100, 2, 5, 4, 6, 1, 19, 21];
  const objects = [
    {
      id: 2,
      name: "Ahmed",
      age: 30,
    },
    {
      id: 1,
      name: "Ramzan",
      age: 20,
    },
    {
      id: 3,
      name: "Bilal",
      age: 18,
    },
  ];
  function sorted(array, object, str, nmbr) {
    for (let i = 0; i < array.length; i++) {
      for (let j = i; j < array.length; j++) {
        if (array[i] > array[j]) {
          let swap = array[i];
          array[i] = array[j];
          array[j] = swap;
        }
      }
    }
    console.log(array);

    for (let i = 0; i < object.length; i++) {
      for (let j = i; j < object.length; j++) {
        if (object[i].name > object[j].name) {
          let swap = object[i];
          object[i] = object[j];
          object[j] = swap;
        }
      }
    }
    console.log(object);

    let chars = str.split("");
    for (let i = 0; i < chars.length; i++) {
      for (let j = 0; j < chars.length; j++) {
        if (chars[j] > chars[j + 1]) {
          let temp = chars[j];
          chars[j] = chars[j + 1];
          chars[j + 1] = temp;
        }
      }
    }
    console.log(chars.join(""));
    let numbers = nmbr.toString().split("");
    for (let i = 0; i < numbers.length; i++) {
      for (let j = 0; j < numbers.length; j++) {
        if (numbers[j] > numbers[j + 1]) {
          let temp = numbers[j];
          numbers[j] = numbers[j + 1];
          numbers[j + 1] = temp;
        }
      }
    }
    console.log(numbers.join(""));
  }

  sorted(arrays, objects, string, number);
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
        {<p>Word : {input}</p>}
        Count:{input.toString("").split(" ").length}
      </div>
   
    </div>
  );
};

export default JavaSript;
