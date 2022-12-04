const express = require('express')
const router = express.Router();

const sequelize =  require('../util/db')

const User =  require('../models/user');
const { mapWhereFieldNames } = require('sequelize/types/utils');



router.post('/sign-in', async function (req, res) {

        try  {
            let info = new infos ({
                name: req.body.name,
                specialization: req.body.specialization,
                worker_id: req.body.worker_id,
            });
            console.log(names, specialization, worker_id);

            let user = new User(info);
            //console.log(user)
            return res.status(200).send(user);
        } catch (err) {
            console.log(err);
        }
    }) 




module.exports = router