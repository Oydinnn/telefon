import express from "express";

import connectDB from "./database/mongodb.js";
import {PORT} from "./config/dotenv.config.js";
import brandRoutes from './routes/brand.routes.js';
import modelRoutes from './routes/model.routes.js';
import phoneRoutes from "./routes/phone.routes.js";
import customerRoutes from "./routes/customer.routes.js";
import orderRoutes from "./routes/customer.routes.js";
import orderDetailRoutes from "./routes/order.details.routes.js";



const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/brands", brandRoutes);
app.use("/models", modelRoutes);
app.use("/phones", phoneRoutes);
app.use("/customers", customerRoutes);
app.use("/orders", orderRoutes);
app.use("/order-details", orderDetailRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});