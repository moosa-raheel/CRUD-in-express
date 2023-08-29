import { Router } from "express";
import { employesController } from "../controllers/employesController.js";
const router = Router();
router.get("/", employesController.readDoc);
router.post("/", employesController.creatDoc);
router.post("/delete/:id", employesController.deleteDoc);
router.get("/update/:id", employesController.updatedata);
router.post("/update/:id", employesController.updateDoc);
router.get("*", employesController.notFound);
//Export routes
export default router;
