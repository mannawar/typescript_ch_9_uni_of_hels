import express from 'express';
//import path from 'path';
import diagnosesRouter from './src/routes/diagnoses';
import patientsRouter from './src/routes/patients';
const app = express();
app.use(express.json());
// app.use(express.static(path.join(__dirname, 'build')));

const PORT = 3000;

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use('/api/diagnoses', diagnosesRouter);

app.use('/api/patients', patientsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});