const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors()); // Allow requests from anywhere

// Fetch user's game passes
app.get("/gamepasses/:userId", async (req, res) => {
    const userId = req.params.userId;
    const url = `https://inventory.roblox.com/v2/users/${userId}/inventory/34`;

    try {
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch game passes" });
    }
});

// Run the API on port 3000
const PORT = 3000;
app.listen(PORT, () => console.log(`✅ API Running on port ${PORT}`));
