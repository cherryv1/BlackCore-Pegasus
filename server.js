// Marcador de Autoría: Baxto Style Tattoo / Cherry V3
const express = require('express');
const statusRoutes = require('./src/routes/statusRoutes');
const iaRoutes = require('./src/routes/iaRoutes');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api', iaRoutes);
app.use('/', statusRoutes);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Motor BlackCore Pegasus escuchando en el puerto ${PORT}`);

    // --- OPTIMIZACIÓN: KEEP-ALIVE (SELF-PING) ---
    // Esta función hace un ping a sí misma cada 14 minutos para evitar el sleep mode de Render.
    const RENDER_URL = 'https://blackcore-pegasus.onrender.com/';
    const PING_INTERVAL = 14 * 60 * 1000; // 14 minutos en milisegundos

    if (process.env.NODE_ENV === 'production' && RENDER_URL) {
        setInterval(() => {
            fetch(RENDER_URL)
                .then(res => console.log(`[Keep-Alive] Ping enviado. Estado: ${res.status}`))
                .catch(err => console.error(`[Keep-Alive] Error al hacer self-ping: ${err.message}`));
        }, PING_INTERVAL);
        console.log(`[Keep-Alive] Auto-ping configurado para ${RENDER_URL} cada 14 minutos.`);
    }
    // ---------------------------------------------
});
