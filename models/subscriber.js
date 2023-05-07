const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
  humidity: {
    type: Int32Array,
    required: true
  },
  temperature: {
    type: Int32Array,
    required: true
  },
  moisture: {
    type: Int32Array,
    required: true
  },
  pressure: {
    type: Int32Array,
    required: true
  },
  light: {
    type: Int32Array,
    required: true
  },
  altitude: {
    type: Int32Array,
    required: true
  }
})

module.exports = mongoose.model('Subscriber', subscriberSchema)