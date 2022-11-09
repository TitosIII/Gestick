import express from "express";
const {pathname: root} = new URL('..', import.meta.url)

const rout = express.Router();

rout.get("/", (req,res)=>{
    res.sendFile("/public/index.html",{root:"."})
})

rout.get("/logEmp", (req,res)=>{
    res.sendFile("/public/Login_Empleado.html",{root:"."})
})

rout.get("/logAdmin", (req,res)=>{
    res.sendFile("/public/Login_Administrador.html",{root:"."})
})

rout.get("/logSucced", (req,res)=>{
    res.sendFile("/public/registro_Exitoso.html",{root:"."})
})

rout.get("/SignAdmin", (req,res)=>{
    res.send("Necesito los html")
})

export const Rout = rout;
