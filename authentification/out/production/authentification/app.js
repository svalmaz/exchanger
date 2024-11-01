// app.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

// Инициализация dotenv
dotenv.config();

// Подключение к базе данных
connectDB();

const app = express();

// Middleware для обработки JSON
app.use(express.json());

// Маршруты
app.use('/api/auth', authRoutes);

// Запуск сервера
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
