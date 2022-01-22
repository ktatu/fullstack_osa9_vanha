import express from 'express';
import patientService from '../services/patientService';

const router = express.Router();

router.get('/', (_req, res) => {
    res.status(200).json(patientService.getPatientDataNoSsn())
})

router.post('/', (_req, res) => {
    const { name, dateOfBirth, gender, occupation, ssn } = _req.body;
    console.log("req body ", _req.body)
    const newPatient = patientService.addPatient({
        name,
        dateOfBirth,
        gender,
        occupation,
        ssn
    })

    res.status(200).json(newPatient)
})

export default router;

