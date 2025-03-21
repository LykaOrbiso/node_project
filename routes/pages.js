const express = require('express');
const router = express.Router();

router.get('/home', (req, res) =>{
    res.send('Hello,World!');
});

//router handler that contains a path parameter
router.post('/user/:id',(req, res) => {
    const user_id = req.params.id;
    res.send(`The user id is: ${user_id}`);
});

//router handler for query parameter
router.get('/search', (req, res) =>{
    const query = req.query.q;
    res.send(`This is the search term entered: ${query}`);
});


router.get("/", (req, res) =>
{ res.send('This is the home page') }) 

router.get("/about", (req, res) =>
{ res.send('This is the about page') }) 

module.exports = router;