module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
      customer_name: 
      {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
      Customer.associate = function(models){
        models.Customer.belongsTo(models.Burger,{
          onDelete: "CASCADE",
          foreignKey: "burger_id"
        });
      };
    return Customer;
  };
  