import express from 'express'
import { Homecontroller } from '../controller/Homecontroller.js';
import { Servicecontroller } from '../controller/Servicecontroller.js';
import { Skillcontroller } from '../controller/Skillcontroller.js';
import { Contactcontroller } from '../controller/Contactcontroller.js';
const router=express.Router();
router.get('/',Homecontroller)
router.get('/services',Servicecontroller)
router.get('/skill',Skillcontroller)
router.get('/contact',Contactcontroller)
export default router