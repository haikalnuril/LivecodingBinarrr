"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    User.init(
        {
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            age: DataTypes.INTEGER,
            phoneNumber: DataTypes.STRING,
            photoProfile: {
                type: DataTypes.TEXT,
                get() {
                    const rawValue = this.getDataValue('photoProfile');
                    return rawValue ? rawValue.split(',') : [];
                },
                set(value) {
                    if (Array.isArray(value)) {
                        this.setDataValue('photoProfile', value.join(','));
                    } else {
                        this.setDataValue('photoProfile', value);
                    }
                }
            }
        },
        {
            sequelize,
            modelName: "User",
            timestamps: false,
        }
    );
    return User;
};
