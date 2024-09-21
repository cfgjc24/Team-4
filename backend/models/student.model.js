import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    start_week: {
        type: Date // Assuming start week is a date field
    },
    graduated: {
        type: Boolean,
        default: false
    },
    race: {
        type: String,
        enum: ['Asian', 'Black', 'Hispanic', 'White', 'Other'] 
    },
    ethnicity: {
        type: String,
        enum: ['Non-Hispanic', 'Hispanic', 'Unknown'] 
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Non-Binary', 'Other']
    },
    pronouns: {
        type: String,
        enum: ['He/Him', 'She/Her', 'They/Them', 'Other']
    },
    town: {
        type: String
    },
    state: {
        type: String
    },
    high_school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'HighSchool' // Reference to HighSchool model
    },
    high_school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher' // Reference to HighSchool model
    },
    date_of_birth: {
        type: Date
    },
    phone_number: {
        type: String
    },
    active: {
        type: Boolean,
        default: false
    },
    complete: {
        type: Boolean,
        default: false
    },
    w1_through_w8_attendance: {
        type: [Boolean], // array of booleans for each week
        validate: [arrayLimit, '{PATH} exceeds the limit of 8'] // custom validator for array length
    },
    capstone: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true // createdAt, updatedAt
});

// Custom validator function for w1_through_w8_attendance length
function arrayLimit(val) {
    return val.length <= 8;
}

const Student = mongoose.model('Student', studentSchema);

export default Student;
