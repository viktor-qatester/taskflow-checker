import express from 'express'; // Современный импорт вместо require!

const app = express();
const PORT = 5000;

// Наш эндпоинт остается прежним
app.get('/api/health', (req, res) => {
    res.json({ 
        status: "OK", 
        message: "TaskFlow Checker backend is running!" 
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Сервер успешно запущен на http://localhost:${PORT}`);
});
