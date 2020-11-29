"use strict";
exports.__esModule = true;
exports.Gender = void 0;
var toNewPatientRecord = function (object) {
    return {
        name: parseName(object.name),
        dateOfBirth: parseDateOfBirth(object.dateOfBirth),
        ssn: parseSsn(object.ssn),
        gender: parseGender(object.gender),
        occupation: parseOccupation(object.occupation)
    };
};
//parser function-name
var parseName = function (name) {
    if (!name || !isString(name)) {
        throw new Error('Incorrect or missing name: ' + name);
    }
    return name;
};
//string validation function
var isString = function (text) {
    return typeof text === 'string';
};
//parser function-dateOfBirth
var parseDateOfBirth = function (dateOfBirth) {
    if (!dateOfBirth || !isString(dateOfBirth)) {
        throw new Error('Incorrect or missing date of birth: ' + dateOfBirth);
    }
    return dateOfBirth;
};
//parser function-ssn
var parseSsn = function (ssn) {
    if (!ssn || !isString(ssn)) {
        throw new Error('Incorrect or missing ssn: ' + ssn);
    }
    return ssn;
};
//parser function-gender
var parseGender = function (gender) {
    if (!gender || !isGender(gender)) {
        throw new Error('Incorrect or missing gender: ' + gender);
    }
    return gender;
};
var isGender = function (param) {
    return Object.values(Gender).includes(param);
};
var Gender;
(function (Gender) {
    Gender["Male"] = "male";
    Gender["Female"] = "female";
    Gender["Trans"] = "trans";
})(Gender = exports.Gender || (exports.Gender = {}));
//parser function- parseOccupation
var parseOccupation = function (occupation) {
    if (!occupation || !isString(occupation)) {
        throw new Error('Incorrect or missing occupation: ' + occupation);
    }
    return occupation;
};
exports["default"] = toNewPatientRecord;
