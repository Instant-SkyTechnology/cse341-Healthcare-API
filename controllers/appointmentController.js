const Appointment = require("../models/Appointment");

// GET
exports.getAppointments = async (req, res) => {
    try {
        const data = await Appointment.find().populate("patientId");
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET BY ID
exports.getAppointmentById = async (req, res) => {
    try {
        const appointment = await Appointment.findById(req.params.id)
            .populate("patientId");

        if (!appointment) {
            return res.status(404).json({ message: "Appointment not found" });
        }

        res.json(appointment);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// CREATE
exports.createAppointment = async (req, res) => {
    try {
        const appointment = new Appointment(req.body);

        if (!appointment.patientId || !appointment.doctorName) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const saved = await appointment.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// UPDATE
exports.updateAppointment = async (req, res) => {
    try {
        const updated = await Appointment.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updated) {
            return res.status(404).json({ message: "Appointment not found" });
        }

        res.json(updated);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// DELETE
exports.deleteAppointment = async (req, res) => {
    try {
        const deleted = await Appointment.findByIdAndDelete(req.params.id);

        if (!deleted) {
            return res.status(404).json({ message: "Appointment not found" });
        }

        res.json({ message: "Appointment deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};