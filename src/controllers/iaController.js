// src/controllers/iaController.js
const cherryV3Core = require('../ia/cherryV3Core');

exports.processIA = (req, res) => {
    try {
        const { input } = req.body;
        if (!input) {
            return res.status(400).json({ status: "error", message: "Falta el campo 'input' en la solicitud." });
        }

        const result = cherryV3Core.processRequest(input);
        res.status(200).json(result);
    } catch (error) {
        console.error("Error en iaController.processIA:", error);
        res.status(500).json({ status: "error", message: "Error interno del servidor al procesar la IA." });
    }
};

exports.getPersonality = (req, res) => {
    try {
        res.status(200).json({ status: "success", personality: cherryV3Core.personality });
    } catch (error) {
        console.error("Error en iaController.getPersonality:", error);
        res.status(500).json({ status: "error", message: "Error interno del servidor al obtener la personalidad." });
    }
};
