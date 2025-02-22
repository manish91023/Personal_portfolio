import { projectGet, projectPost } from "../controller/project.controller.js";

import express from "express"
const router =express.Router()

router.post("/post",projectPost)
router.get("/get",projectGet)



export default router