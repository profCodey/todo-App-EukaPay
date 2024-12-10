import express from 'express';
import todoRoutes from './routes/todoRoutes';
const app = express();
const PORT = 3001;
app.use(express.json());
app.use('/api/todos', todoRoutes);
app.listen(PORT, () => {
    console.log(`Backend running at http://localhost:${PORT}`);
});
