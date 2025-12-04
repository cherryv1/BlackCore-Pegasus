exports.getStatus = (req, res) => {
    res.status(200).json({ message: "BlackCore Pegasus funcionando" });
};

exports.getPing = (req, res) => {
    res.status(200).send("pong");
};
