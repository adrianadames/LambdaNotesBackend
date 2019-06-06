const db = require('../../data/dbConfig.js');
const router = require('express').Router();

// api/tags/

router.get('/', (req,res) => {
    db('tags')
        .select()
        .then(tags => {
            res.status(200).json(tags);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

router.get('/:id', (req,res) => {
    const id = req.params.id;
    db('tags')
        .where({id:id})
        .select()
        .then(tag => {
            res.status(200).json(tag);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

router.post('/', (req,res) => {
    const tag = req.body;
    db.insert(tag)
        .into('tags')
        .then(tag => {
            res.status(201).json(tag);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

router.put('/:id', (req,res) => {
    const tag = req.body;
    const id = req.params.id;
    
    db('tags')
        .where({id:id})
        .update(tag)
        .then(count => {
            res.status(200).json(count);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});


router.delete('/:id', (req,res) => {
    const id = req.params.id;

    db('tags')
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