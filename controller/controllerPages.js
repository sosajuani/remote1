const express = require('express');
const fs=require('fs');
const jsonDb=fs.readFileSync('./controller/db.json');
const db=JSON.parse(jsonDb);

const controllerPages = {
    'home': (req, res) => {
        res.render('pages/home.ejs')
    },
    'login': (req, res) => {
        res.render('pages/login.ejs')
    },
    'carrito':(req,res) =>{
        res.render('pages/carrito.ejs')
    },
    'register':(req,res) =>{
        res.render('pages/register.ejs')
    },
    'contacto':(req, res) =>{
        res.render('pages/contacto.ejs') 
    },
    'productDetail':(req, res) =>{
        res.render('pages/productDetail.ejs')
    },
    'productos':(req, res) =>{
        res.render('pages/productos.ejs',{db:db})
    },
    'somos':(req, res) =>{
        res.render('pages/somos.ejs') /* res.render muestra el motor de plantilla/ valor */
    }     
}
module.exports = controllerPages;