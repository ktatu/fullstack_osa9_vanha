import express from 'express';
import patientService from '../services/patientService';
import toNewPatient from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
    res.status(200).json(patientService.getPatientDataNoSsn());
})

router.post('/', (req, res) => {
    try {
        const newPatient = toNewPatient(req.body);
        const addedPatient = patientService.addPatient(newPatient);

        res.json(addedPatient);
    } catch (error: unknown) {
        let errorMsg = 'Error: ';
        if (error instanceof Error) {
            errorMsg += error.message;
        }

        res.status(400).send(errorMsg);
    }
})

export default router;

