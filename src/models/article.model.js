const { default: mongoose } = require('mongoose')
const mongooose = require('mongoose')

const articleSchema = new mongooose.Schema({
    title: {
        required: true,
        type: String
    },
    subtitle: {
        required: true,
        type: String
    },
    content: {
        type: String
    },
})

module.exports = mongoose.model('Article', articleSchema)