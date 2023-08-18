const express = require("express");
const path = require('path');
/* const nodemailer= require('nodemailer')
require('dotenv').config(); */
/* const ejsMate = require('ejs-mate') */

const app = express()


 app.engine('html', require('ejs').renderFile); 
 app.set('view engine', 'html'); 
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, './images')));
app.use(express.static(path.join(__dirname, './websiteimg')));

app.use(express.static(path.join(__dirname, './public'), {
    setHeaders: (res, path) => {
      if (path.endsWith('.css')) {
        res.setHeader('Content-Type', 'text/css');
      }
    }
  }));

/*   app.use(express.urlencoded({ extended: false }));
  app.use(express.json()); */
  
 
app.get('/', (req, res) => {
    res.render('home')
})

app.get('/home', (req, res) => {
    res.render('home')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.get('/services', (req, res) => {
    res.render('services')
})

app.get('/gallery', (req, res) => {
    res.render('gallery')
})





app.listen(3000, () => {
  console.log("listening")
})




/* ServiceWorkerRegistration, we can do all ytype of ServiceWorkerRegistration, then every door service and theri name and theri picture and price aroudn
add pvc door styles as WEBGL_lose_context, and add review system if possible but at the end */



/* 2005 - 2023 © Just Doors UK Ltd. All Rights Reserved.
Terms & Conditions. Privacy Policy. Cookie Policy. Sitemap.
Registered in England No. 5574221 | VAT Registered No. 880 3790 04  */
     
   /*  <p>you local manufacture, we repair, install and supply upvc windows, upvc doors and bi folding door, porches</p>
     <p>we also build conservatories</p>

     athy mai css card ann krni a layout  */
