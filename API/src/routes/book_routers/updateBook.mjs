import express from "express";
import { books } from "../../db/mock-data.mjs";
import { success } from "../helper.mjs";



const updateBookRouter = express() 

updateBookRouter.post("/:id", (req, res) => {
    
})


export { updateBookRouter };