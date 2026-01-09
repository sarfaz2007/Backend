import mongoose from "mongoose";

const StudentSchema = new mongoose.schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        rollno: {
            type: String,
            required: true,
            unique: true
        },

        address: {
            type: String,
            required: true
        },

        subject: {
            type: String,
            required: true,

        }

    }
);

const Student = mongoose.model("Student",StudentSchema);

export default Student;