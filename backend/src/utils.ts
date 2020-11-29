import { parseIsolatedEntityName } from 'typescript';
// import { isString } from 'util';
import { NewPatientEntry } from './types';

const toNewPatientRecord = (object: any):
NewPatientEntry => {
    return {
        name: parseName(object.name),
        dateOfBirth: parseDateOfBirth(object.dateOfBirth),
        ssn: parseSsn(object.ssn),
        gender: parseGender(object.gender),
        occupation: parseOccupation(object.occupation)
    };
};

//parser function-name
const parseName = (name: any): string => {
    if(!name || !isString(name)) {
        throw new Error('Incorrect or missing name: ' + name)
    }
    return name;
}

//string validation function
const isString = (text: any): text is string => {
    return typeof text === 'string';
}

//parser function-dateOfBirth
const parseDateOfBirth = (dateOfBirth: any): string => {
    if(!dateOfBirth || !isString(dateOfBirth)) {
        throw new Error('Incorrect or missing date of birth: ' + dateOfBirth);
    }

    return dateOfBirth;
}

//parser function-ssn
const parseSsn = (ssn: any): string => {
    if(!ssn || !isString(ssn)) {
        throw new Error('Incorrect or missing ssn: ' + ssn);
    }

    return ssn;
}

//parser function-gender
const parseGender = (gender: any): Gender => {
    if(!gender || !isGender(gender)) {
        throw new Error('Incorrect or missing gender: ' + gender);
    }
    return gender;
}

const isGender = (param: any): param is Gender => {
    return Object.values(Gender).includes(param);
};
export enum Gender {
    Male = "male",
    Female = 'female',
    Trans = 'trans'
}

//parser function- parseOccupation
const parseOccupation = (occupation: any): string => {
    if(!occupation || !isString(occupation)) {
        throw new Error('Incorrect or missing occupation: ' + occupation);
    }
    return occupation;
}

export default toNewPatientRecord;