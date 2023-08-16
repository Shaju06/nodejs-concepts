import express from 'express';
 import {createFile} from './streams/stream.js'

createFile()
const app = express();
  
app.get('/hello',(req,res) => {
    res.send('Hello World');
})
  
const PORT = 5000;
  
app.listen(PORT,() => {
    console.log(`Running on PORT ${PORT}`);
})