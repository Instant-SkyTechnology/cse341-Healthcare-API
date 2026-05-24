const express = require('express');
const router = express.Router();

const controller = require('../controllers/patientController');


/**
 * @swagger
 * /patients:
 *   get:
 *     summary: Get all patients
 *     tags: [Patients]
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', controller.getPatients);


/**
 * @swagger
 * /patients/{id}:
 *   get:
 *     summary: Get patient by ID
 *     tags: [Patients]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Patient ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Patient found
 *       404:
 *         description: Patient not found
 *       500:
 *         description: Server error
 */
router.get('/:id', controller.getPatientById);


/**
 * @swagger
 * /patients:
 *   post:
 *     summary: Create a new patient
 *     tags: [Patients]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               dateOfBirth:
 *                 type: string
 *               gender:
 *                 type: string
 *               phone:
 *                 type: string
 *               email:
 *                 type: string
 *               address:
 *                 type: string
 *               insuranceProvider:
 *                 type: string
 *               emergencyContact:
 *                 type: string
 *               bloodType:
 *                 type: string
 *     responses:
 *       201:
 *         description: Patient created
 *       400:
 *         description: Bad request
 */
router.post('/', controller.createPatient);


/**
 * @swagger
 * /patients/{id}:
 *   put:
 *     summary: Update patient
 *     tags: [Patients]
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
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               address:
 *                 type: string
 *               dateOfBirth:
 *                 type: string
 *               gender:
 *                 type: string
 *               medicalHistory:
 *                 type: string
 *     responses:
 *       200:
 *         description: Updated successfully
 */
router.put('/:id', controller.updatePatient);


/**
 * @swagger
 * /patients/{id}:
 *   delete:
 *     summary: Delete patient
 *     tags: [Patients]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Deleted successfully
 */
router.delete('/:id', controller.deletePatient);

module.exports = router;