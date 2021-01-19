const express = require('express')
const Router = express.Router()
const Task = require('../models/Task')

// Fetch All Tasks
Router.get('/', async (_req, res) => {
    try {
        const tasks = await Task.find()
        res.json(tasks)
    } catch (error) {
        res.json({ message: error })
    }
})

// Fetch tasks by taskId
Router.get('/:taskId', async (req, res) => {
    try {
        const task = await Task.findById(req.params.taskId)
        res.json(task)
    } catch (error) {
        res.json({ message: error })
    }
})

// Post single Task
Router.post('/', async (req, res) => {
    const task = new Task({
        _id: req.body._id,
        title: req.body.title,
        date: req.body.date,
        time: req.body.time,
        repeat: req.body.repeat,
        isCompleted: req.body.isCompleted,
        isImportant: req.body.isImportant,
    })
    try {
        const savedTask = await task.save()
        res.json(savedTask)
    } catch (error) {
        res.json({ message: error })
    }
})

// Update Task by taskId
Router.patch('/', async (req, res) => {
    try {
        const task = await Task.updateOne(
            { _id: req.body._id },
            { $set: req.body }
        )
        res.json(task)
    } catch (error) {
        res.json({ message: error })
    }
})

// Complete Task by completeTaskId
Router.patch('/:completeTaskId', async (req, res) => {
    try {
        const task = await Task.updateOne(
            { _id: req.params.completeTaskId },
            { isCompleted: true }
        )
        res.json(task)
    } catch (error) {
        res.json({ message: error })
    }
})

// Delete Task by taskId
Router.delete('/:taskId', async (req, res) => {
    try {
        const task = await Task.deleteOne({ _id: req.params.taskId})
        res.json(task)
    } catch (error) {
        res.json({ message: error })
    }
})

// Delete all tasks
Router.delete('/', async (req, res) => {
    try {
        const tasks = await Task.deleteMany()
        res.json(tasks)
    } catch (error) {
        res.json({ message: error })
    }
})

// Delete either complete or incomplete tasks
Router.delete('/:isCompleted', async (req, res) => {
    try {
        const tasks = await Task.deleteMany({ isCompleted: req.params.isCompleted })
        res.json(tasks)
    } catch (error) {
        res.json({ message: error })
    }
})

module.exports = Router
