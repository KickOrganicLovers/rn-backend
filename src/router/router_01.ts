import express from "express";
const router : express.Router = express.Router()

router.get('/' , (req, res) => {
    res.send('this is router_01')
})
export  default  router