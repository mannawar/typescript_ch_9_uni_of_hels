import express from 'express';
import diagnosesService from '../services/diagnosesService';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(diagnosesService.getDiagnosesRecords());
});

router.post('/', (_req, res) => {
    res.send('Diagnoses is being saved!');
});

export default router;