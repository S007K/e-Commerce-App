const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

require("./dbConnet");
const MaincategoryRoutes = require("./routes/MaincategoryRoutes");
const SubcategoryRoutes = require("./routes/SubcategoryRoutes");
const BrandRoutes = require("./routes/BrandRoutes");
const ProductRoutes = require("./routes/ProductRoutes");
const UserRoutes = require("./routes/UserRoutes");
const CartRoutes = require("./routes/CartRoutes");
const WishlistRoutes = require("./routes/WishlistRoutes");
const CheckoutRoutes = require("./routes/CheckoutRoutes");
const NewslatterRoutes = require("./routes/NewslatterRoutes");
const ContactRoutes = require("./routes/ContactRoutes");

require("dotenv").config();
const app = express();

app.use(cors());
app.use("/public", express.static("public"));

app.use(express.json()); //this application use jason server
app.use("/api/maincategory", MaincategoryRoutes);
app.use("/api/subcategory", SubcategoryRoutes);
app.use("/api/brand", BrandRoutes);
app.use("/api/product", ProductRoutes);
app.use("/api/user", UserRoutes);
app.use("/api/cart", CartRoutes);
app.use("/api/wishlist", WishlistRoutes);
app.use("/api/checkout", CheckoutRoutes);
app.use("/api/newslatter", NewslatterRoutes);
app.use("/api/contact", ContactRoutes);

var port = 80;
app.listen(port, () => {
  console.log(`Server is Running at port http://localhost:${port}`);
});
