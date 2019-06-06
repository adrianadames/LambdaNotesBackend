const db = require('../../data/dbConfig.js');
const router = require('express').Router();

// api/noteEntries/

router.get('/', (req,res) => {
    db('noteEntries')
        .select()
        .then(noteEntries => {
            res.status(200).json(noteEntries);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

router.get('/:id', (req,res) => {
    const id = req.params.id;
    db('noteEntries')
        .where({id:id})
        .select()
        .then(noteEntries => {
            res.status(200).json(noteEntries);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

// router.get('/:id/tags', (req,res) => {
//     const id = req.params.id;

//     db('noteEntries')
//         .where({id:id})
//         .then(noteEntry => {
//             if (noteEntry) {
//                 db('noteEntriesTags')
//                     .select('tagsId')
//                     .where({'noteEntriesId':id})
//                     .then(tags => {
//                         res.status(200).json(tags);
//                     })
//             } else {
//                 res.status(404).json({err: 'noteEntry id not found'})
//             }
//         })
//         .catch(err => {
//             res.status(500).json(err);
//         })
// })

router.post('/', (req,res) => {
    const noteEntry = req.body;
    db.insert(noteEntry)
        .into('noteEntries')
        .then(noteEntry => {
            res.status(201).json(noteEntry);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

router.put('/:id', (req,res) => {
    const noteEntry = req.body;
    const id = req.params.id;
    
    db('noteEntries')
        .where({id:id})
        .update(noteEntry)
        .then(count => {
            res.status(200).json(count);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});


router.delete('/:id', (req,res) => {
    const id = req.params.id;

    db('noteEntries')
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