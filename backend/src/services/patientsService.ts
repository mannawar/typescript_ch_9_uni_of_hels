import patients from '../../data/patientsRecord.js';
import { NewPatientEntry, PatientsEntry } from '../types';
import { v4 as uuid } from 'uuid';

const getPatients = (): PatientsEntry[] => {
    return patients;
};

const getPatientsRecords = () : PatientsEntry[] => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};

const addPatients = (record: NewPatientEntry): PatientsEntry => {
    const newPatientEntry = {
        id: uuid(),
        ...record
    }
    patients.push(newPatientEntry);
    return newPatientEntry;
}

export default {
    getPatients,
    getPatientsRecords,
    addPatients,
}