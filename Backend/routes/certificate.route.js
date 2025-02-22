

import express from "express"

import { getCertificate, postCertificate } from "../controller/certificate.controller.js";
const router =express.Router()


router.post("/post",postCertificate)
router.get("/get",getCertificate)


export default router