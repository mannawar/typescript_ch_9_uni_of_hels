export type Code = 'M24.2' | 'M51.2' | 'S03.5' | 'J10.1' | 'J06.9' | 'Z57.1' | 'N30.0' | 'H54.7' | 'J03.0' | 'L60.1' | 'Z74.3' |'L20' |'F43.2' | 'S62.5' | 'H35.29';

export type Gender = 'male' | 'female' | 'trans';

export interface DiagnosesEntry {
    code: Code;
    name: string;
    latin?: string;
};

export interface PatientsEntry {
    id: string;
    name: string;
    dateOfBirth?: string;
    ssn?: string;
    gender: Gender;
    occupation: string;
}

export type SensitiveEntry = Omit<PatientsEntry, 'ssn'>;

//utility types for post
export type NewPatientEntry = Omit<PatientsEntry, 'id'>;