import React, { useState } from "react";
import axios from "axios";
import { Patient } from "../types";
import { useParams } from "react-router-dom";

import { useStateValue } from "../state";

import { apiBaseUrl } from "../constants";

const PatientInfoPage = () => {
    const [{ patients }, dispatch] = useStateValue();
    const [patient, setPatient] = useState<Patient | undefined>();
    const { id } = useParams<{ id: string }>();

    React.useEffect(() => {
        const patientFromState = Object.values(patients).find((patient: Patient) => patient.id === id);

        if (patientFromState) {
            setPatient(patientFromState);
            return;
        }

        const fetchPatient = async (patientId: string) => {
            try {
                const { data: patientFromApi } = await axios.get<Patient>(
                `${apiBaseUrl}/patients/${patientId}`
                );
                setPatient(patientFromApi);
                dispatch({ type: "ADD_PATIENT", payload: patientFromApi });
            } catch (e) {
                console.error(e);
            }
        };
        void fetchPatient(id);
    }, [id]);

    return (
        <div>
            <h3>{patient?.name} ({patient?.gender})</h3>
            <p>
                ssn: {patient?.ssn}
                <br />
                occupation: {patient?.occupation}
            </p>
        </div>
    );
};

export default PatientInfoPage;