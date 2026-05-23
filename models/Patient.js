const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        dateOfBirth: Date,
        gender: String,
        phone: String,
        email: String,
        address: String,
        insuranceProvider: String,
        emergencyContact: String,
        bloodType: String
    },
    { timestamps: true }
);

module.exports = mongoose.model("Patient", patientSchema);