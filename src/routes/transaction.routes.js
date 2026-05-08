import express from "express";
import { createInitialFundsTransaction, createTransaction } from "../controllers/transaction.controller.js";
import { authMiddleware, authSystemUserMiddleware } from "../middleware/auth.middleware.js";


const router = express.Router();

router.post("/system/initial-funds", authSystemUserMiddleware, createInitialFundsTransaction);
router.post("/create", authMiddleware, createTransaction);

export default router;