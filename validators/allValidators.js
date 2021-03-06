"use strict";
const Joi = require('joi')

const VALIDATION_OPTIONS = {
    abortEarly: false,
    stripUnknown: true,
    errors: {
        escapeHtml: true,
    }
};

const {getClients} = require("./getClientsValidator"); // used for both active and all clients
const {getTrainers} = require("./getTrainerValidator");
const {addClients} = require("./addClientsValidator");
const {addTrainers} = require("./addTrainersValidator");
const {deleteClients} = require("./deleteClientsValidator");
const {deleteTrainers} = require("./deleteTrainersValidator");
const {updateClients} = require("./updateClientsValidator");
const {updateTrainers} = require("./updateTrainerValidator");

const schemas = {
    getClients,
    getTrainers,
    addClients,
    addTrainers,
    deleteClients,
    deleteTrainers,
    updateClients,
    updateTrainers
};

exports.schemas = schemas;
exports.VALIDATION_OPTIONS = VALIDATION_OPTIONS;