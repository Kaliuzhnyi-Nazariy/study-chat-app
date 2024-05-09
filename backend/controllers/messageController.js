import Conversation from "../models/conversationSchema.js";
import Message from "../models/messageSchema.js";

export const messageSent = async (req, res) => {
  const { message } = req.body;
  const { id: receiverID } = req.params;
  const senderID = req.user._id;

  try {
    let conversation = await Conversation.findOne({
      participations: { $all: [senderID, receiverID] },
    });

    if (!conversation) {
      conversation = Conversation.create({
        participations: [senderID, receiverID],
      });
    }

    const newMessage = new Message({
      senderID,
      receiverID,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    res.status(201).json("Massage sent!");

    // await conversation.save(), await newMessage.save();

    await Promise.all([conversation.save(), newMessage.save()]);
  } catch (error) {
    console.log("error in messageSent controller: ", error.message);
    res.status(500).json({ error: "Internal Server Error!" });
  }
};
