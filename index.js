import express from 'express';
import web from './routes/web.js'
const app=express();
const port=process.env.PORT||3000;
app.set('view engine','ejs')
//load routes
app.use('/',web)
app.use(express.static('public'));
app.listen(port,()=>{console.log("Server is running")})