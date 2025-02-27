import { Parser } from 'json2csv'
import fs from 'fs'
const CSV=[
  {
    "id":1,
    "name":"Ali",
     "Role":"Frontend",
     "feild":"Computer Science", 
    "phone":"0321-7515546",
    "CNIC":"12345-4567890-1"
    },
    {
    "id":2,
    "name":"Ahmed",
    "Role":"BackEnd", 
    "feild":"Information Technology", 
    "phone":"0321-7515546",
    "CNIC":"12345-4567890-2"
    },
    {
    "id":3,
    "name":"Rana",
    "Role":"FullStack", 
    "feild":"Software Engineer", 
    "phone":"0321-7515546",
    "CNIC":"12345-4567890-3"
    }
]
const parserObj= new Parser();
const csv =parserObj.parse(CSV)
fs.writeFileSync('./data.csv',csv)