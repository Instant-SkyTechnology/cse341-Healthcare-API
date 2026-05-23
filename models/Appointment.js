const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
        required: true
    },
    doctorName: { type: String, required: true },
    department: String,
    appointmentDate: Date,
    reason: String,
    status: {
        type: String,
        enum: ["scheduled", "completed", "cancelled"],
        default: "scheduled"
    },
    notes: String
}, { timestamps: true });

module.exports = mongoose.model("Appointment", appointmentSchema);