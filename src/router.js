import express from "express";
const {pathname: root} = new URL('..', import.meta.url)
import {db} from "./db.js"

const rout = express.Router();

rout.get("/", (req,res)=>{
    res.sendFile("/public/index.html",{root:"."})
});

rout.get("/aboutUs", (req,res)=>{
    res.sendFile("/public/SobreNosotros.html",{root:"."})
});

rout.get("/contactUs", (req,res)=>{
    res.sendFile("/public/Contactanos.html",{root:"."})
});

rout.get("/logEmp", (req,res)=>{
    res.sendFile("/public/Login_Empleado.html",{root:"."})
});

rout.get("/logAdmin", (req,res)=>{
    res.sendFile("/public/Login_Administrador.html",{root:"."})
});

rout.get("/logSucced", (req,res)=>{
    res.sendFile("/public/registro_Exitoso.html",{root:"."})
});

rout.get("/SignAdmin", (req,res)=>{
    res.send("Necesito los html")
});

rout.post("/logEmpleado",(req,res)=>{
    var user = req.body.user;
    console.log(user)
    db.query(`select * from empleado where nombre = "${user}" ;`,(results,error)=>{
        console.log(results)
        if (error){
            console.log(error);
        }else{
            if(req.body.password == results.contraseña){
                res.send(`${user}`);
            }else{
                res.redirect("/logEmp")
            }
        }
    })
});

rout.get("/addProduct",(req,res)=>{
    
});

rout.get("/modifyProduct",(req,res)=>{

});

rout.get("/deleteProduct",(req,res)=>{

});

export const Rout = rout;
