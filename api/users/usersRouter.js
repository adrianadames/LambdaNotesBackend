const db = require('../../data/dbConfig.js');
const router = require('express').Router();

// api/users/

router.get('/', (req,res) => {
    db('users')
        .select()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

router.get('/:id/noteEntries', (req,res) => {
    const id = req.params.id;
    db('noteEntries')
        .where({userId:id})
        .select()
        .then(noteEntries => {
            res.status(200).json(noteEntries);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

router.post('/', (req,res) => {
    const user = req.body;
    db.insert(user)
        .into('users')
        .then(user => {
            res.status(201).json(user);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

router.delete('/:id', (req,res) => {
    const id = req.params.id;

    db('users')
        .where({id})
        .del()
        .then(count => {
            res.status(200).json(count);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});


module.exports = router;