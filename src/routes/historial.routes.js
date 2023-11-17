import { Router } from 'express';
import { createHistorial, getDiagnosticosByUserId } from '../controllers/historial.controller.js';

const router = Router();

router.post('/diagnosticonew', createHistorial);

router.get('/verdiagnosticos/:userId', getDiagnosticosByUserId)

export default router;