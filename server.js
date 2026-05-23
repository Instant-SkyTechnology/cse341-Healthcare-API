const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const cors = require('cors');

dotenv.config();

connectDB();

const app = express();

app.use(cors({
  origin: 'https://cse341-healthcare-api.onrender.com'
}));
app.use(express.json());

/* ---------- SWAGGER ---------- */
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/* ---------- ROUTES ---------- */
app.use('/api/patients', require('./routes/patientRoutes'));
app.use('/api/appointments', require('./routes/appointmentRoutes'));

/* ---------- HOME ---------- */
app.get('/', (req, res) => {
  res.send('Healthcare API Running');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// require('dotenv').config();

// const express = require('express');
// const swaggerUi = require('swagger-ui-express');
// const swaggerFile = require('./swagger-output.json');

// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();

// /* ---------- MIDDLEWARE ---------- */
// app.use(cors());
// app.use(express.json());

// /* ---------- SWAGGER ---------- */
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// /* ---------- ROUTES ---------- */
// app.use('/api/patients', require('./routes/patientRoutes'));
// app.use('/api/appointments', require('./routes/appointmentRoutes'));

// /* ---------- HOME ---------- */
// app.get('/', (req, res) => {
//   res.send('Healthcare API Running');
// });

// /* ---------- MONGODB ---------- */
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log('MongoDB Connected'))
//   .catch((err) => console.error(err));

// /* ---------- SERVER ---------- */
// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });