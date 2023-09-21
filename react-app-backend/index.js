const express = require('express');
const app = express();
const fs  = require('fs');
const cors = require('cors');


app.use(cors());
app.get("/data",(req,res)=>{

    fs.readFile('db.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error while reading the file:', err)
            return;
        }
        const profile = JSON.parse(data);
        const person = profile.profile;
        
        res.send(person[Math.floor(Math.random() * person.length)]);
      });
})



const PORT = process.env.PORT || 5000;

app.listen( PORT , ()=>{
    console.log("server running at 5000");
})
