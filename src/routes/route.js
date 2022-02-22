const express = require('express');
const router = express.Router();

//this api will fetch all movies from the array
router.get('/movies/', function(req, res) {
    res.send('["RowdyBaby","Spiderman","X-men","Wrong-Turn","Robot"]')
});
//this api will fetch all movies by indexing array

router.get('/movies/:moviesId', function(req, res) {
    mov = ["RowdyBaby", "Spiderman", "X-men", "Wrong-Turn", "Robot"]
    let value = req.params.moviesId;
    if (value > mov.length - 1) {
        res.send("no such movie exist")
    } else {
        res.send(mov[value])
    }
});

//this api will fetch all movies from array of objects
router.get('/moviiz', function(req, res) {
    res.send([{ id: 1, name: 'Conjuring' }, { id: 2, name: 'Terminator' }, { id: 3, name: 'Hell-Boy' }, { id: 4, name: 'Batman' }])
});

//this api will fetch all movies from array of objects by indexid
router.get('/films/filmId', function(req, res) {
    let movi = [{ id: 1, name: 'Conjuring' }, { id: 2, name: 'Terminator' }, { id: 3, name: 'Hell-Boy' }, { id: 4, name: 'Batman' }]
    let value = req.params.filmId;
    let found = false;
    for (i = 0; i < movi.length; i++) {
        if (movi[i].id == value) {
            found = true
            res.send(movi[i])
            break
        }
    }
    if (found == false) {
        res.send("no such movie with this id")
    }
});

module.exports = router;