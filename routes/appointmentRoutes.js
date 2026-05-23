// const express = require("express");
// const router = express.Router();

// const {
//     getAppointments,
//     createAppointment,
//     updateAppointment,
//     deleteAppointment
// } = require("../controllers/appointmentController");

// /**
//  * #swagger.tags = ['Appointments']
//  */
// router.get("/", getAppointments);

// /**
//  * #swagger.tags = ['Appointments']
//  * #swagger.description = 'Create appointment'
//  * #swagger.parameters['body'] = {
//     in: 'body',
//     required: true,
//     schema: {
//         patientId: "64f1c2a1234567890abcde12",
//         doctorName: "Dr. Smith",
//         department: "Cardiology",
//         appointmentDate: "2026-05-20",
//         reason: "Checkup",
//         status: "scheduled",
//         notes: "First visit"
//     }
//  }
//  */
// router.post("/", createAppointment);

// /**
//  * #swagger.tags = ['Appointments']
//  */
// router.put("/:id", updateAppointment);

// /**
//  * #swagger.tags = ['Appointments']
//  */
// router.delete("/:id", deleteAppointment);

// module.exports = router;
const express = require('express');
const router = express.Router();

const controller = require('../controllers/appointmentController');


/**
 * @swagger
 * /appointments:
 *   get:
 *     summary: Get all appointments
 *     tags: [Appointments]
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', controller.getAppointments);


/**
 * @swagger
 * /appointments:
 *   post:
 *     summary: Create appointment
 *     tags: [Appointments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               patientId:
 *                 type: string
 *               doctorName:
 *                 type: string
 *               department:
 *                 type: string
 *               appointmentDate:
 *                 type: string
 *               reason:
 *                 type: string
 *               status:
 *                 type: string
 *               notes:
 *                 type: string
 *     responses:
 *       201:
 *         description: Appointment created 
 */
router.post('/', controller.createAppointment);


/**
 * @swagger
 * /appointments/{id}:
 *   put:
 *     summary: Update appointment
 *     tags: [Appointments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               patientId:
 *                 type: string
 *               doctorName:
 *                 type: string
 *               department:
 *                 type: string
 *               appointmentDate:
 *                 type: string
 *               reason:
 *                 type: string
 *               status:
 *                 type: string
 *               notes:
 *                 type: string
 *     responses:
 *       200:
 *         description: Updated successfully
 */
router.put('/:id', controller.updateAppointment);


/**
 * @swagger
 * /appointments/{id}:
 *   delete:
 *     summary: Delete appointment
 *     tags: [Appointments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Deleted
 */
router.delete('/:id', controller.deleteAppointment);

module.exports = router;