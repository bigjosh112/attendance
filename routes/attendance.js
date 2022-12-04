const express = require('express')
const router = express.Router();

const sequelize = require('../util/db')

const Attend = require('../models/attendanceUser')
const { Router } = require('express');
const { DATE } = require('sequelize');



router.post('/clockedIn-in', async (req, res,) => {
    
    let infos = {
        id: req.body.id,
        clockedIn: req.body.clockedIn

    }

    let users = await Attend.create(infos)
    console.log(user)
    return res.status(200).send(users)
   
}) 


router.post('/clockedOut', async (req, res) => {

   const userId = req.body.id
    //const userId = user.dataValues.id
    console.log(userId)

    
    let user = await User.findByPk(userId );
    console.log(user)
    if (!user) {
      return res.status(400).send({ status: "error", msg: "user not found" });
    }

    // update post document
    user = await User.update({ clockedOut: new Date() } ,
    {
        where: {id: userId }
      })
      //await user.save();
      console.log(userId)

    return res.status(200).send({ status: "ok", msg: "logged out successfully", users });
    
    // const user = {
    //     name: req.body.name,
    //     specialization: req.body.specialization,
    //     worker_id: req.body.worker_id
    // }
    // this.name.set({
    //     updatedAt: 'clockedOut',
    //     clockedOut: true
    // })
    // await user.save()
    //res.status(200).send(user)
})


module.exports = router