import express from 'express';
import patientsService from '../services/patientsService';
import toNewPatientRecord from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(patientsService.getPatientsRecords());
});

router.post('/', (req, res) => {
    try {
        const newPatientEntry = toNewPatientRecord(req.body);

        const addedEntry = patientsService.addPatients(newPatientEntry);
        res.json(addedEntry);
    } catch (e) {
        res.status(400).send(e.message);
    }
})

export default router;