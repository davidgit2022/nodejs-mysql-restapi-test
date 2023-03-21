import { Router } from 'express';

//Import rutas
import {getEmployees , createEmployee, updateEmployee, deleteEmployee, getEmployee} from '../controllers/employeesController.js';

const router = Router()

router.get('/employees', getEmployees);
router.get('/employees/:id', getEmployee)

router.post('/employees', createEmployee);

router.patch('/employees/:id', updateEmployee);

router.delete('/employees/:id', deleteEmployee)

export default router; 