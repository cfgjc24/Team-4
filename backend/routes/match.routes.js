import express from 'express'; 
import {matchTutors} from '../controllers/match.controllers.js';


const router = express.Router();

router.get('/matchTutors', matchTutors);

export default router;