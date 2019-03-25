const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const post = require('../models/post')

const db = "mongodb://imoralescs:123456abc@ds123196.mlab.com:23196/node-angular"

mongoose.Promise = global.Promise
mongoose.connect(db, function(err) {
    if(err) {
        console.log('Connection error')
    }
})

router.get('/posts', function(req, res) {
    console.log('Requesting posts')

    post
        .find({})
        .exec(function(err, posts) {
            if(err) {
                console.log('Error getting the posts')
            }
            else {
                res.json(posts)
                console.log(posts)
            }
        })

})

module.exports = router