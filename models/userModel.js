module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user",{
    email:{
        type:DataTypes.STRING,
        allowNull: false
    },
    name:{
        type:DataTypes.STRING
    },
    surname: {
        type: DataTypes.STRING
    }
})
}
