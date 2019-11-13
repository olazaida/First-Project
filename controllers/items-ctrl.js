const Items = require('../models/item')

createItems = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an item',
        })
    }

    const items = new Items(body)

    if (!items) {
        return res.status(400).json({ success: false, error: err })
    }

    items
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: item._id,
                message: 'item created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Item not created!',
            })
        })
}

updateItems = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Items.findOne({ _id: req.params.id }, (err, items) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Item not found!',
            })
        }
        item.name = body.name
        item.time = body.time
        item.rating = body.rating
        item
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: items._id,
                    message: 'Item updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Item not updated!',
                })
            })
    })
}

deleteItem = async (req, res) => {
    await Items.findOneAndDelete({ _id: req.params.id }, (err, items) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!items) {
            return res
                .status(404)
                .json({ success: false, error: `Item not found` })
        }

        return res.status(200).json({ success: true, data: item })
    }).catch(err => console.log(err))
}

getItemsById = async (req, res) => {
    await Items.findOne({ _id: req.params.id }, (err, items) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!items) {
            return res
                .status(404)
                .json({ success: false, error: `Item not found` })
        }
        return res.status(200).json({ success: true, data: items })
    }).catch(err => console.log(err))
}

getItems = async (req, res) => {
    await Items.find({}, (err, items) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!items.length) {
            return res
                .status(404)
                .json({ success: false, error: `Item not found` })
        }
        return res.status(200).json({ success: true, data: items })
    }).catch(err => console.log(err))
}

module.exports = {
    createItems,
    updateItems,
    deleteItem,
    getItems,
    getItemsById,
}