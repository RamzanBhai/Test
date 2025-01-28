import React from 'react'


const App = () => {
  const integer=15;
  const string="Ahmed"
  const array=["ali","frontend","React"];
  const object=[
    {
      id:1,
      name:"Ahmed",
      roll:"Frontend"
    },
    {
      id:2,
      name:"Ali",
      roll:"Backend"
    },
    {
      id:3,
      name:"Ramzan",
      roll:"FullStack"
    },
  ];
  return (
    <div>
      <h1>Object Method</h1>
    {
      object.map((data)=>{
        <div>
         <h3>Id:{data.id}</h3>
         <h4>Name:{data.name}</h4> 
         <p>Roll{data.roll}</p>

        </div>
      })
    }
    <h1>Array method</h1>
    {
      array.map((data)=>{
        <ul>
          <li>
            {data}
          </li>
        </ul>
      })
    }
    <h1>Strings Method</h1>
    {
      string.includes((datas)=>{
        <div>
          {datas}
        </div>
      })
    }
    <h1>integers </h1>
    {
      integer.toFixed()
    }
    </div>
  )
}

export default App
