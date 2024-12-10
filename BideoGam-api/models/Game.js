module.exports = (sequelize, DataTypes) => {
    const Game = sequelize.define(
        'Game',
        {
            GameID:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            GameName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            ReleaseDateEU: {
                type: DataTypes.DATEONLY
            },
            ReviewScore: {
                type: DataTypes.DECIMAL
            }
        }
    );

    console.log(Game === sequelize.models.Game);
    return Game;
}