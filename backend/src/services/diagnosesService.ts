import diagnoses from '../../data/diagnosesEntry.js';
import { DiagnosesEntry } from '../types';

const getRecords = (): DiagnosesEntry[] => {
    return diagnoses;
};

const getDiagnosesRecords = (): DiagnosesEntry[] => {
    return diagnoses.map(({code, name, latin }) => ({
        code, 
        name, 
        latin
    }));
};

const addDiagnoses = () => {
    return [];
}

export default {
    getRecords,
    getDiagnosesRecords,
    addDiagnoses,
}