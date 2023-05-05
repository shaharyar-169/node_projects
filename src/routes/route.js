const express = require('express');
const details = require('../modals/details');
const service = require('../modals/service');
const slider = require('../modals/slider');
const contect = require('../modals/contect')
const Banner = require('../modals/banner')
const gallery = require('../modals/gallery')
const about = require('../modals/about')
const routes = express.Router();


// home route handler
routes.get('/home', async (req, res) => {
  const data = await details.findOne({ _id: '63dce84ef945ff2896d8f594' })
  const slide = await slider.find()
  const servicedata = await service.find()
  const banner = await Banner.findOne({ _id: '63de49228e6b38501c205c88' });
  const About = await about.findOne({ _id: '63de5f4e1fee70a5f22dafc7' });

  res.render('home.hbs', {
    details: data,
    slide: slide,
    services: servicedata,
    bannerdata: banner,
    aboutdata: About
  })

})


// gallery route handler
routes.get('/gallery', async (req, res) => {
  const data = await details.findOne({ _id: '63dce84ef945ff2896d8f594' })
  const Gallery = await gallery.find();
  res.render('gallery.hbs', {
    details: data,
    gallerydata: Gallery
  })
})


// user-contect route handler  
routes.post('/user-contect', async (req, res) => {
  console.log(req.body)
  try {
    const data = await contect.create(req.body)
    console.log(data)
    res.redirect('/home')
  } catch (err) {
    console.log(err)
  }

})

module.exports = routes;