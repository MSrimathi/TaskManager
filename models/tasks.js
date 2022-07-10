const mongoose = require('mongoose');

const TasksSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        required: true,
        enum: ['complete', 'incomplete'],
        default: 'incomplete'
    },
    owner_Id: {
        type: Number,
        required: true,
    }
})

const Tasks = mongoose.model("Tasks",TasksSchema);

module.exports = Tasks;