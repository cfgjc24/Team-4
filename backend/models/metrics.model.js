import mongoose from "mongoose";

const metricsSchema = new mongoose.Schema({
        surveytype: {
            type: String,
            enum: ['precourse', 'postcourse', 'module'],
            required: true
        },
        student: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Student', 
            required: true
        },
        module: {
            type: String,
            enum: ['1', '2', '3', '4', '5', '6', '7', '8', '9']
        },
        question1: {
            type: Int32,
            enum: [1, 2, 3, 4, 5],
        },
        question2: {
            type: Int32,
            enum: [1, 2, 3, 4, 5],
        },
        question3: {
            type: Int32,
            enum: [1, 2, 3, 4, 5],
        },
        question4: {
            type: Int32,
            enum: [1, 2, 3, 4, 5],
        },
        question5: {
            type: Int32,
            enum: [1, 2, 3, 4, 5],
        },
        question6: {
            type: Int32,
            enum: [1, 2, 3, 4, 5],
        },
        question7: {
            type: Int32,
            enum: [1, 2, 3, 4, 5],
        },
        question8: {
            type: Int32,
            enum: [1, 2, 3, 4, 5],
        },
        question9: {
            type: Int32,
            enum: [1, 2, 3, 4, 5],
        },
        question10: {
            type: Int32,
            enum: [1, 2, 3, 4, 5],
        },
        question11: {
            type: Int32,
            enum: [1, 2, 3, 4, 5],
        },
        question12: {
            type: Int32,
            enum: [1, 2, 3, 4, 5],
        },
        question13: {
            type: Int32,
            enum: [1, 2, 3, 4, 5],
        },
        question14: {
            type: Int32,
            enum: [1, 2, 3, 4, 5],
        },
        question15: {
            type: Int32,
            enum: [1, 2, 3, 4, 5],
        },
        question16: {
            type: Int32,
            enum: [1, 2, 3, 4, 5],
        },
        question17: {
            type: Int32,
            enum: [1, 2, 3, 4, 5],
        },
        question18: {
            type: Int32,
            enum: [1, 2, 3, 4, 5],
        },
        question19: {
            type: Int32,
            enum: [1, 2, 3, 4, 5],
        },
        question20: {
            type: Int32,
            enum: [1, 2, 3, 4, 5],
        },
        question21: {
            type: Int32,
            enum: [1, 2, 3, 4, 5],
        },
        question22: {
            type: Int32,
            enum: [1, 2, 3, 4, 5],
        }    
})


const Metrics = mongoose.model('Metrics', metricsSchema);
export default Metrics;
