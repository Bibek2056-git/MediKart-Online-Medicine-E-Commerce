import mongoose from "mongoose";
const contactSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        trim: true
    },
    Email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        match: [/.+\@.+\..+/, "Please fill a valid email address"]

    },
    Phone_no: {
        type: String,
        required: true
    },
    Message: {
        type: String,
        required: true,
        trim: true,
        maxlength: 500
        
    }
});

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;
