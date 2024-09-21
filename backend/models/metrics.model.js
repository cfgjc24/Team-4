import mongoose from "mongoose";

const metricsSchema = new mongoose.Schema({
        surveytype: {
            type: String,
            //required: true
        },
        student: {
            type: String,
            ref: 'Student', 
            //required: true
        },
        module: {
            type: String,
            enum: ['1', '2', '3', '4', '5', '6', '7', '8', '9']
        },
        question1: {
            type: Number,
            enum: [1, 2, 3, 4, 5],
        },
        question2: {
            type: Number,
            enum: [1, 2, 3, 4, 5],
        },
        question3: {
            type: Number,
            enum: [1, 2, 3, 4, 5],
        },
        question4: {
            type: Number,
            enum: [1, 2, 3, 4, 5],
        },
        question5: {
            type: Number,
            enum: [1, 2, 3, 4, 5],
        },
        question6: {
            type: Number,
            enum: [1, 2, 3, 4, 5],
        },
        question7: {
            type: Number,
            enum: [1, 2, 3, 4, 5],
        },
        question8: {
            type: Number,
            enum: [1, 2, 3, 4, 5],
        },
        question9: {
            type: Number,
            enum: [1, 2, 3, 4, 5],
        },
        question10: {
            type: Number,
            enum: [1, 2, 3, 4, 5],
        },
        question11: {
            type: Number,
            enum: [1, 2, 3, 4, 5],
        },
        question12: {
            type: Number,
            enum: [1, 2, 3, 4, 5],
        },
        question13: {
            type: Number,
            enum: [1, 2, 3, 4, 5],
        },
        question14: {
            type: Number,
            enum: [1, 2, 3, 4, 5],
        },
        question15: {
            type: Number,
            enum: [1, 2, 3, 4, 5],
        },
        question16: {
            type: Number,
            enum: [1, 2, 3, 4, 5],
        },
        question17: {
            type: Number,
            enum: [1, 2, 3, 4, 5],
        },
        question18: {
            type: Number,
            enum: [1, 2, 3, 4, 5],
        },
        question19: {
            type: Number,
            enum: [1, 2, 3, 4, 5],
        },
        question20: {
            type: Number,
            enum: [1, 2, 3, 4, 5],
        },
        question21: {
            type: Number,
            enum: [1, 2, 3, 4, 5],
        },
        question22: {
            type: Number,
            enum: [1, 2, 3, 4, 5],
        }    
})


const Metrics = mongoose.model('Metrics', metricsSchema);
export default Metrics;
