const Patient = require("../models/Patient");

// GET all patients
exports.getPatients = async (req, res) => {
    try {
        const patients = await Patient.find();
        res.json(patients);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// CREATE patient
exports.createPatient = async (req, res) => {
    try {
        const patient = new Patient(req.body);

        if (!patient.firstName || !patient.lastName) {
            return res.status(400).json({ message: "Name is required" });
        }

        const saved = await patient.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// UPDATE patient
exports.updatePatient = async (req, res) => {
    try {
        const updated = await Patient.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updated) {
            return res.status(404).json({ message: "Patient not found" });
        }

        res.json(updated);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// DELETE patient
exports.deletePatient = async (req, res) => {
    try {
        const deleted = await Patient.findByIdAndDelete(req.params.id);

        if (!deleted) {
            return res.status(404).json({ message: "Patient not found" });
        }

        res.json({ message: "Patient deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};