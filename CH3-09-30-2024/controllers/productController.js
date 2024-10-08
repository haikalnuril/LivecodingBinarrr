const { product } = require('../models')

const getProducts = async(req, res) => {
    try{
        const allProduct = await product.findAll();

        res.status(200).json({
            status: true,
            message: "Successfully! test",
            data: allProduct,
        });
    } catch(error) {
        return res.status(500).json({
            status: false,
            message: "An error occurred while fetching users",
            error: error.message,
        });
    }
}

module.exports = { getProducts }