import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true, //primary key
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
        type: Date, // Assuming start week is a date field
        required: true
    },
    graduated: {
        type: Boolean,
        default: false,
        required: true
    },
    race: {
        type: String,
        enum: ['Asian', 'Black', 'Hispanic', 'White', 'Other'],
        required: true
    },
    ethnicity: {
        type: String,
        enum: ['Non-Hispanic', 'Hispanic', 'Unknown'],
        required: true 
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Non-Binary', 'Other'],
        required: true
    },
    pronouns: {
        type: String,
        enum: ['He/Him', 'She/Her', 'They/Them', 'Other'],
        required: true
    },
    town: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    highschool_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'HighSchool', // Reference to HighSchool model
        required: true
    },
    teacher_email: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Teacher"
    },
    date_of_birth: {
        type: Date,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: false,
        required: true
    },
    complete: {
        type: Boolean,
        default: false,
        required: true
    },
    w1_through_w8_attendance: {
        type: [Boolean], // array of booleans for each week
        default: [false, false, false, false, false, false, false, false],
        validate: [arrayLimit, '{PATH} exceeds the limit of 8'], // custom validator for array length
        required: true
    },
    capstone: {
        type: Boolean,
        default: false,
        required: true
    }, 
    availability: {
        type: String,
        required: true
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
