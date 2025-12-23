const express = require('express');
const dotenv = require('dotenv');
const app = express();

// Load environment variable

dotenv.config();

const PORT = process.env.PORT || 3000;

const cityRoutes = require('./routes/cityRoutes');

app.use(express.json());
app.use('/cities', cityRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
