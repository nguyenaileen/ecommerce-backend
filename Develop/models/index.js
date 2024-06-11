// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo

Product.belongsTo(Category, {
  foreignKay: "product_id",
});

// Categories have many Products

Category.hasMany(Product, {
  foreignKay: "category_id",
});

// Products belongToMany Tags (through ProductTag)

Product.belongsToMany(Tag, {
  through: ProductTag, // The intermediate model
  foreignKey: "product_id", // The foreign key in the Product model
});

// Tags belongToMany Products (through ProductTag)

Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: "tag_id",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
