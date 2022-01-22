import patientData from '../data/patients.json';
import { v1 as uuid } from 'uuid';

import { PatientNoSsn, Patient, NewPatient } from '../types';

const getPatientDataNoSsn = (): PatientNoSsn[] => {
    return patientData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};

const addPatient = (newPatient: NewPatient): Patient => {
    const patient = { id: uuid(), ...newPatient };
    patientData.push(patient);

    return patient;
};

export default {
    getPatientDataNoSsn,
    addPatient
};