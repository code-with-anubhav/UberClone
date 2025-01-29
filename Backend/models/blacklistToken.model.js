const mongoose = require('mongoose');

const blacklistTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expire: 86400   // token deleted after logout in 24hr later
    }
})

module.exports = mongoose.model("BlacklistToken", blacklistTokenSchema)