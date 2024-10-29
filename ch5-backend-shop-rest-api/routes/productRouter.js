const router = require("express").Router();

const { productController } = require("../controllers");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("", productController.createProduct);
router.get("", authMiddleware, productController.getAllProduct);
router.get("/:id", productController.getProductById);
router.patch("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;