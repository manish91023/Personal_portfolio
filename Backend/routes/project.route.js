import { MLprojectGet, projectGet, projectPost } from "../controller/project.controller.js";

import express from "express"
const router =express.Router()

router.post("/post",projectPost)
router.get("/get",projectGet)
router.get("/get/ml",MLprojectGet)



export default router