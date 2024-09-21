//didnt have time to build out
import Message from "../models/message.model.js";
import Student from "../models/student.model.js";

// Send a message
export const sendMessage = async (req, res) => {
    const { sender, recipient, content } = req.body;

    try {
        // Check if both sender and recipient exist in the database
        const senderStudent = await Student.findById(sender);
        const recipientStudent = await Student.findById(recipient);

        if (!senderStudent || !recipientStudent) {
            return res.status(404).json({ success: false, message: "Sender or recipient not found" });
        }

        const newMessage = new Message({
            sender,
            recipient,
            content
        });

        await newMessage.save();

        res.status(201).json({ success: true, data: newMessage });
    } catch (error) {
        console.log("Error in sending message: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// Get messages for a user
export const getMessagesForUser = async (req, res) => {
    const { studentId } = req.params;

    try {
        // Find all messages where the user is either the sender or recipient
        const messages = await Message.find({
            $or: [
                { sender: studentId },
                { recipient: studentId }
            ]
        }).populate('sender recipient', 'email');

        res.status(200).json({ success: true, data: messages });
    } catch (error) {
        console.log("Error in fetching messages: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// Mark message as read
export const markMessageAsRead = async (req, res) => {
    const { messageId } = req.params;

    try {
        const message = await Message.findById(messageId);
        
        if (!message) {
            return res.status(404).json({ success: false, message: "Message not found" });
        }

        message.read = true;
        await message.save();

        res.status(200).json({ success: true, data: message });
    } catch (error) {
        console.log("Error in marking message as read: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};
