const {Router} = require('express');

const Link = require('../models/link');
const router = Router()

router.get('/:code', async (req, res) => {
    try {
        
        const link = await Link.findOne({code: req.params.code})
        if(link){
            link.clicks++
            await link.save()
            return res.redirect(link.from)
        } else{
            console.log('log');
        }

        res.status(404).json("Link don't found")

    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong: try again'
        })
    }
})

module.exports = router