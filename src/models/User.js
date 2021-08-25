const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            email: DataTypes.STRING
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.hasMany(models.Adress, { foreignKey: 'userId', as: 'adresses' })
        this.belongsToMany(models.Tech, { foreignKey: 'userId', through: 'userTechs', as: 'techs' });

    }
}

module.exports = User;