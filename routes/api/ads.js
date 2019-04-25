const express = require('express');
const router = express.Router();

//@ route GET api/ads/test
//Test ads route
router.get('/test',(req, res)=> {
    res.json({
        msg: "ads works"
    })
});

module.exports = router;