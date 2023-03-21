import { Router } from 'express';
import {ping} from '../controllers/indexController.js'

const router = Router();

//Verificación de conexión con database
router.get('/ping', ping);

export default router
