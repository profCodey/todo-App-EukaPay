import express from 'express';
import todoRoutes from './routes/todoRoutes';
import cors from 'cors';

const app = express();
const PORT = process.env.NEXT_PUBLIC_BASE_URL || 5000;

app.use(cors());
app.use(express.json());
app.use('/api/todos', todoRoutes);

app.listen(PORT, () => {
    console.log(`Backend running at http://localhost:${PORT}`);
});
