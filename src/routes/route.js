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
    if(value>mov.length-1){
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

////////////////////////////////////////////////////////////////////////////////////////////////

 
   // -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing
    router.get("/sol1", function (req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    let arr= [1,2,3,5,6,7]
  
    let total = 0;
    for (var i in arr) {
        total += arr[i];
    }
  
    let lastDigit = arr.pop()
    let consecutiveSum= lastDigit * (lastDigit+1) / 2
    let missingNumber= consecutiveSum - total
  
    res.send(  { data: missingNumber  }  );
  });
 

//////////////////////////////////////////////////////////////////////////////////////////////

// -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing
    router.get("/sol2", function (req, res) {
    //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
    let arr= [33, 34, 35, 37, 38]
    let len= arr.length
  
    let total = 0;
    for (var i in arr) {
        total += arr[i];
    }
  
    let firstDigit= arr[0]
    let lastDigit= arr.pop()
    let consecutiveSum= (len + 1) * (firstDigit+ lastDigit ) / 2
    let missingNumber= consecutiveSum - total
   
    res.send(  { data: missingNumber  }  );
  });
 




module.exports = router;
