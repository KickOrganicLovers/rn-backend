//this is router receive fetch access from frontend app

import express from "express";
import {Data} from "../types";

const router: express.Router = express.Router()

const data1: Data = {
    name:'kajimoto',
    age:19,
    isMan:true
}

router.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000')
    res.json([data1])
})

export default router
