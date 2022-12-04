const express = require('express')

const Sequelize = require('sequelize')
const sequelize = require('./util/db')

const app = express();

app.use(express.json());


const Attend = new  require('./models/attendanceUser')
const User = new require('./models/user')

app.use('/user', User )

app.use('/attend', Attend)


Attend.belongsTo(User)

const PORT = 3600;
sequelize
//.sync({force: true})
.sync()
.then((result) => {
    //console.log(result)
    return User.findByPk(1);
})
.then(() =>{
    app.listen(3000)
}).catch(err => console.log(err))