const express = require('express');
const router = express.Router();

async function data(req,res){

        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => res.send(json))

}

router.get('/api',data)

module.exports=router;