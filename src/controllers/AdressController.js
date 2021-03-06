const Adress = require('../models/Adress');
const User = require('../models/User');
const { index } = require('./UserController');

module.exports = {
    async index(req, res) {
        const { userId } = req.params;

        const user = await User.findByPk(userId, {
            include: { association: 'adresses' }
        });

        if (!user) {
            return res.status(400).json({ error: 'Usuario nao encontrado' });
        }

        return res.json(user.adresses);
    },

    async store(req, res) {
        const { userId } = req.params;
        const { zipcode, street, number } = req.body;

        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(400).json({ error: 'Usuario nao encontrado' });
        }

        const adress = await Adress.create({
            zipcode,
            street,
            number,
            userId,
        });

        return res.json(adress);
    },
}