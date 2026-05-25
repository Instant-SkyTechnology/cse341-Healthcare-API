const express = require('express');
const router = express.Router();

const controller = require('../controllers/appointmentController');
const isAuthenticated = require('../middleware/auth');


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
 * /appointments/{id}:
 *   get:
 *     summary: Get appointment by ID
 *     tags: [Appointments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Appointment ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Appointment found
 *       404:
 *         description: Appointment not found
 *       500:
 *         description: Server error
 */
router.get('/:id', controller.getAppointmentById);


/**
 * @swagger
 * /appointments:
 *   post:
 *     security:
 *       - oauth2: []
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
router.post('/', isAuthenticated, controller.createAppointment);


/**
 * @swagger
 * /appointments/{id}:
 *   put:
 *     security:
 *       - oauth2: []
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
router.put('/:id', isAuthenticated, controller.updateAppointment);


/**
 * @swagger
 * /appointments/{id}:
 *   delete:
 *     security:
 *       - oauth2: []
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
router.delete('/:id', isAuthenticated, controller.deleteAppointment);

module.exports = router;