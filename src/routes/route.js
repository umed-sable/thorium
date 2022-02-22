const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
});

//1. this api will fetch all movies from array

 router.get('/movies', function(req, res){
     res.send('["golmal","dhamal","don","krish","bahubali"]')
});

//2. this api will feth all movie by indexid from array

router.get('/movies/:moviesId', function(req,res){
    mov = ["golmal","dhamal","don","krish","bahubali"]
    let value = req.params.movieId;
    if(value>movie.length-1){
        res.send('"movie doesnt exist')
    } else {
        res.send(mov[value])
    }
});

//3. this api will fetch all movies from array all objects

router.get('/moviez', function(req, res){
    res.send( {id: 1,name: 'The Shining'}, {id: 2,name: 'Incendies'}, {id: 3,name: 'Rang de Basanti'}, {id: 4,name: 'Finding Nemo'} )
});

// 4. this api will fetch all movies from array of objects by index id

router.get('/films/:filmId', function(req,res){
    let movi = [ {id: 1,name: 'The Shining'}, {id: 2,name: 'Incendies'}, {id: 3,name: 'Rang de Basanti'}, {id: 4,name: 'Finding Nemo'} ]
    let value = req.params.filmId;
    let found = false;
    for(i=0;i<movi.length;i++){
        if( movi[i].id==value){
            found = true
            res.send(movi[i])
            break
        }
    }
    if(found == false){
        res.send('No movie exists with this id')
    }
});


module.exports = router;
