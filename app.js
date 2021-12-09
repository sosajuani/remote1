const express = require('express');
const app = express();
const path = require('path');

//motor de plantilla
app.set('views engine','ejs');
app.set('views',path.resolve(__dirname,'public/views'));

//carpeta publica
app.use(express.static('public'));

//requerimos rutas main
const rutasPages = require('./routes/pagesRoutes');
//requerimos rutas perfil
const rutasPerfil= require('./routes/perfilRoutes')
//requerimos rutas admin
const rutasAdmin= require('./routes/adminRoutes')
app.use('/',rutasPages);
app.use('/perfil',rutasPerfil);
app.use('/admin',rutasAdmin);



app.listen(process.env.PORT || 3000, () => console.log('servidor funcionando'));