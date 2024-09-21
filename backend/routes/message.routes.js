import express from "express";
import {
    sendMessage,
    getMessagesForUser,
    markMessageAsRead
} from '../controllers/message.controllers.js';

const router = express.Router();

router.post("/send", sendMessage); // Send a message
router.get("/:studentId", getMessagesForUser); // Get messages for a user
router.put("/:messageId/read", markMessageAsRead); // Mark message as read #accessable code variables

export default router;
