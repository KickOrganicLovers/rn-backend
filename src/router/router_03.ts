import express from "express";
import {Data} from "../types";
import {create} from "../mongo/CRUDhandler";
const router: express.Router = express.Router()

const data0: Data = {
    name: 'aochi',
    age: 19,
    isMan: true
}

router.get('/', (req,res) => {
  res.send('this is access router')
    create<Data>(data0).then((res) => {
        if(res){
            console.log('create successfully')
        }else{
            console.log('creating failed')
        }
    })
})

export default router