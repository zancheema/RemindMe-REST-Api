const mongoose = require('mongoose')

const TaskSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    date: {
        type: Number,
        required: true
    },
    time: {
        type: Number
    },
    repeat: {
        type: Number,
        required: true
    },
    isCompleted: {
        type: Boolean,
        required: true,
        default: false
    },
    isImportant: {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model('Tasks', TaskSchema)