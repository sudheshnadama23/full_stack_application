const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define('Submission', {
    full_name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    phone_number: { type: DataTypes.STRING, allowNull: false },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { min: 18, max: 120 }
    },
    address: { type: DataTypes.TEXT },
    preferred_contact: {
      type: DataTypes.ENUM('Email', 'Phone', 'Both'),
      allowNull: false
    }
  }, {
    tableName: 'Submissions', // Ensures consistent table name
    timestamps: true          // Adds createdAt and updatedAt
  });