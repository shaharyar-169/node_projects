const express = require('express');
const routes = require('./routes/route');
const mongoose = require('mongoose');
const hbs = require('hbs');
const path = require('path')
const bodyparser = require('body-parser')
const detailsmodal = require('./modals/details')
const slider = require('./modals/slider')
const Banner = require('./modals/banner')
const about = require('./modals/about')
const gallery = require('./modals/gallery')
const service = require('./modals/service');
const bodyParser = require('body-parser');
const app = express();


//midallware
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/static', express.static('public'))


//template engine 
app.set('view engine', 'hbs');
app.set('views', 'view');
hbs.registerPartials('./view/partials');



// routes
app.use(routes);


//database connection
mongoose.connect("mongodb://127.0.0.1:27017/website_tut", () => {
    console.log('databasre connected')

    // gallery.create({
    //     imgUrl:'/static/img/s1.jpeg'
    // })

    // about.create({
    //     title:'About Us',
    //     about_description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea fugiat minima doloremque, voluptatibus consequatur voluptas praesentium officia voluptatem velit! Doloremque tempora a dolorem possimus qui animi officia, voluptates molestias laboriosam ipsam eaque repellat aut numquam, suscipit doloribus. At odit aut dolor ducimus modi quo ut possimus, sunt maiores magni quas maxime esse pariatur. Commodi aliquid modi doloribus! Quis aut officiis impedit velit laudantium recusandae voluptate id perspiciatis. Dolor nihil hic facere blanditiis ipsam cupiditate aliquid ullam iure.Tenetur error obcaecati vero vitae labore, commodi odio molestiae nam ad rerum incidunt minima fuga eius neque adipisci velit? Saepe aliquam libero hic!" 

    // })



    // Banner.create({
    //     firstbabnner:{
    //         bannertitle:'We Work for People, not for money',
    //         discription:'Learning with technical solution Start Learning with technical solution Start Learning with teLearning with technical solution Start Learning with technical solution Start Learning with te Learning with technical solution Start Learning with technical solution Start Learning with us',
    //         bannerurl:'/static/img/bn1.jpg'
    //     },
    //     secondbanner:{
    //         bannertitle:'We Work for People, not for money',
    //         discription:'Learning with technical solution Start Learning with technical solution Start Learning with teLearning with technical solution Start Learning with technical solution Start Learning with te Learning with technical solution Start Learning with technical solution Start Learning with us',
    //         bannerurl:'/static/img/bn2.jpg'
    //     }
    // })

    //     service.create([
    //         {
    //         icon:"fa-sharp fa-solid fa-pen-to-square",
    //         title:'provide best course',
    //         description:'hello dear i am shaharayar and full stack devrkf hello dear i am shaharayar and full stack devrkf',
    //         linktext:'check',
    //         link:'https://www.facebook.com'
    //     },

    //     {
    //         icon:"fa-sharp fa-solid fa-handshake",
    //         title:'provide best course',
    //         description:'hello dear i am shaharayar and full stack devrkf hello dear i am shaharayar and full stack devrkf',
    //         linktext:'Learn',
    //         link:'https://www.facebook.com'
    //     },
    //     {
    //         icon:"fa-sharp fa-solid fa-snowflake",
    //         title:'provide best course',
    //         description:'hello dear i am shaharayar and full stack devrkf hello dear i am shaharayar and full stack devrkf',
    //         linktext:'visit',
    //         link:'https://www.facebook.com'
    //     }
    // ])


    // slider.create([
    //     {
    //         imageurl:'/static/img/s1.jpeg',
    //         title:'what about javascript',
    //         subtitle:'javascript is my favroit language javascript is my favroit language',

    //     },
    //     {
    //         imageurl:'/static/img/s2.jpeg',
    //         title:'what about Django ',
    //         subtitle:'javascript is my favroit language javascript is my favroit language',

    //     },
    //      {
    //         imageurl:'/static/img/s3.jpg',
    //         title:'what about Node-js',
    //         subtitle:'javascript is my favroit language javascript is my favroit language',

    //      }
    // ])

    // detailsmodal.create({
    //     branname: 'Technical solution',
    //     brandiconurl:"https://w7.pngwing.com/pngs/240/972/png-transparent-information-technology-computer-technical-support-technology.png",
    //     links:[
    //         {
    //             lable:'Home',
    //             url:'/'
    //         },
    //         {
    //             lable:'services',
    //             url:'/services'
    //         },
    //         {
    //             lable:'gallery',
    //             url:'/gallery'
    //         },
    //         {
    //             lable:'about Us',
    //             url:'/about us'
    //         },
    //         {
    //             lable:'contect Us',
    //             url:'/contect_us'
    //         },
    //     ]
    // })
})


app.listen(process.env.PORT | 3000, () => {
    console.log('server is runninig')
})
