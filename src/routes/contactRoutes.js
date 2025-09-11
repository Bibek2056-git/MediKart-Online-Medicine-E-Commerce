import express from "express";
import Contact from "../model/modelcontact.js";   // adjust path if needed

const router = express.Router();

//  Create (POST) new contact
router.post("/", async (req, res) => {
  try {
    const { Name, Email, Phone_no, Message } = req.body;
    const newContact = new Contact({ Name, Email, Phone_no, Message });
    await newContact.save();
    res.status(201).json({ success: true, data: newContact });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

//  Read (GET) all contacts
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json({ success: true, data: contacts });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Read (GET) single contact by ID
router.get("/:id", async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ success: false, message: "Contact not found" });
    res.status(200).json({ success: true, data: contact });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Update (PUT) contact by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedContact) return res.status(404).json({ success: false, message: "Contact not found" });
    res.status(200).json({ success: true, data: updatedContact });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// Delete (DELETE) contact by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedContact) return res.status(404).json({ success: false, message: "Contact not found" });
    res.status(200).json({ success: true, message: "Contact deleted" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
