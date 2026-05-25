const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

const cors = require('cors');

const session = require('express-session');
const passport = require('passport');

dotenv.config();

require('./config/passport');

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/auth', require('./routes/authRoutes'));

app.use('/patients', require('./routes/patientRoutes'));
app.use('/appointments', require('./routes/appointmentRoutes'));

app.get('/', (req, res) => {
  res.send('Healthcare API Running');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});