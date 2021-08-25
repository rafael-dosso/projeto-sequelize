const Adress = require('../models/Adress');
const User = require('../models/User');
const { index } = require('./UserController');

module.exports = {
    async store(req, res) {
        const { userId } = req.params;
        const { zipcode, street, number } = req.body;

        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        const adress = await Adress.create({
            zipcode,
            street,
            number,
            userId,
        });

        return res.json(adress);
    },

    async index(req, res) {
        const { userId } = req.params;

        const user = await User.findByPk(userId, {
            include: { association: 'adresses' }
        });

        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        return res.json(user.adresses);

    }
}