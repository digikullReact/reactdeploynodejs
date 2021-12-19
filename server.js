const express=require("express");
const { path } = require("express/lib/application");
const app=express();

const port=process.env.PORT || 8080
app.use(express.static('build'));

 
app.get("/api",(req,res)=>{
    res.json({message:"Hello world"})
})



  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname,  'build', 'index.html'));
  });





app.listen(port,()=>{
    console.log("Server Running")
})