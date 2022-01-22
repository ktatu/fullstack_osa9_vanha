import patientData from '../data/patients';
import { v1 as uuid } from 'uuid';

import { PatientNoSsn, Patient, NewPatient } from '../types';

const patients: Array<Patient> = patientData;

const getPatientDataNoSsn = (): PatientNoSsn[] => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
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