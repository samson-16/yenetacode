const db = require("../config/dbConfig");

const productModel = db.productModel;

const addBank = async (req, res) => {
  const { name, description, price, quantity_in_stock, available } = req.body;

  if (!name || !description || !price || !quantity_in_stock) {
    return res
      .status(404)
      .json({ message: "Please enter the required fields" });
  } else {
    const findExistingProduct = await productModel.findOne({ where: { name } });
    if (findExistingProduct) {
      return res.status(400).json({ message: "Product is already registered" });
    } else {
      const product = new productModel({
        name,
        description,
        price,
        quantity_in_stock,
        available,
      });
      const saveProduct = await product.save();
      if (!saveProduct)
        return res.status(404).json({
          message: "Product registration failed, Please try again",
        });
      else
        return res.json({
          data: "Product registered successfully",
        });
    }
  }
};

const getAll = async (req, res) => {
  const query = req.query ?? {};
  const findProduct = await productModel.findAll(query);
  if (!findProduct)
    return res.status(404).json({ message: "Product does not exist" });
  else {
    return res.json({
      data: findProduct,
    });
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const findProduct = await productModel.findOne({
    where: { id },
  });
  if (!findProduct)
    return res.status(404).json({ message: "Product does not exist" });
  else {
    return res.json({
      data: findProduct,
    });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const bank = await productModel.destroy({
    where: {
      id,
    },
  });
  if (!bank)
    return res.status(500).json({ message: "Failed to delete product" });
  else {
    return res.json({
      data: "Product deleted successfully",
    });
  }
};

const updateProduct = async (req, res) => {
  const { id, name, description, price, quantity_in_stock,available } = req.body;
  const findProduct = await productModel.findOne({
    where: { id },
  });
  if (!findProduct)
    return res.status(404).json({ message: "Product does not exist" });

  const update = {
    name: name ?? findProduct?.name,
    description: description ?? findProduct?.description,
    price: price ?? findProduct?.price,
    quantity_in_stock: quantity_in_stock ?? findProduct?.quantity_in_stock,
    available:
      available != findProduct.available ? available : findProduct.available,
  };
  const product = await productModel.update(update, { where: { id } });
  if (product == 0)
    return res
      .status(404)
      .json({ message: "Updating product information failed" });
  else {
    return res.json({
      message: "Product Updated Successfully",
    });
  }
};

module.exports = {
  addBank,
  getAll,
  deleteProduct,
  getProductById,
  updateProduct,
};
