const Tech = require('../models/Tech');
const User = require('../models/User');


module.exports = {

    async index(req, res) {
        const { userId } = req.params;

        const user = await User.findByPk(userId, {
            include: { association: 'techs' }
        });

        if (!user) {
            return res.status(400).json({ error: 'Usuario nao encontrado' });
        }

        return res.json(user.techs);
    },

    async store(req, res) {
        const { userId } = req.params;
        const { name } = req.body;

        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(400).json({ error: 'Usuario nao encontrado' });
        }

        const [tech] = await Tech.findOrCreate({
            where: { name }
        })

        await user.addTech(tech);

        return res.json(tech)
    },
}