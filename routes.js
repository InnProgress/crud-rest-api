import express from 'express';
const router = express.Router();

import Note from "./models/Note";

router.get('/', (_, res) => {
    Note.find({}, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    });
});

router.post('/', (req, res) => {
    const newNote = new Note({
        title: req.body.title,
        body: req.body.body,
        date: Date.now()
    });
    newNote.save().then(() =>
        res.json({
            success: true
        })
    ).catch(error =>
        res.json({
            name: error.name,
            message: error._message
        })
    );
});

router.get('/post/:id', (req, res) => {
    Note.findById(req.params.id, (err, data) => {
        if (err) res.json(err);
        res.json(data);
    })
});

router.delete("/post/:id", (req, res) => {
  Note.findByIdAndRemove(req.params.id, (err, data) => {
    if (err) res.json(err);
    res.json(data);
  });
});

router.patch("/post/:id", (req, res) => {
  Note.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    body: req.body.body,
    updated: Date.now()
  }, (err, data) => {
    if (err) res.json(err);
    res.json(data);
  });
});

export default router;