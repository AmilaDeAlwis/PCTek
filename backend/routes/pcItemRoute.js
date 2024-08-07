import express from "express";
import {
  addPcItem,
  listPcItem,
  removePcItem,
} from "../controllers/pcItemController.js";
import multer from "multer";

const pcItemRouter = express.Router();

// Image Storage Engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});
// Image uploading storage
const upload = multer({ storage: storage });
// Routes regarding admin items operations
pcItemRouter.post("/add", upload.single("image"), addPcItem);
pcItemRouter.get("/list", listPcItem);
pcItemRouter.post("/remove", removePcItem);

export default pcItemRouter;
