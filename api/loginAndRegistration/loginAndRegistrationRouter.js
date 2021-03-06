require('dotenv').config();
const db = require('../../data/dbConfig.js');
const router = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const secret = process.env.JWT_SECRET; 

let generateToken = (user) => {
    const payload = {username:user.username};
    const options = {
        expiresIn: '5h',
    }
    return jwt.sign(payload, secret, options)
};


// api
router.post('/register', (req,res) => {
    console.log('/register hit');
    console.log('req.body: ', req.body)
    const user = req.body;
    const hash = bcrypt.hashSync(user.password,10);
    user.password = hash;

    db('users')
        .returning('id')
        .insert(user)
        .then(ids => {
            console.log('ids = ', ids)
            db('users')
                .where({id:ids[0]})
                // .first()
                .then(user => {
                    const token = generateToken(user);
                    const userId = ids[0];
                    console.log(userId)
                    res.status(201).json({token:token,userId:userId});
                })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({err});
        })
});

// api
router.post('/login', (req,res) => {
    const credentials = req.body;
    db('users')
        .where({username:credentials.username})
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(credentials.password, user.password)) {
                const token = generateToken(user);
                res.status(200).json({token:token, userId:user.id})
            } else {
                return res.status(401).json({error:'Incorrect credentials'});
            }
        })
        .catch(err => {
            res.status(500).json(err);
        })
});



module.exports = router;