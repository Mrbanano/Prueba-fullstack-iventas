const Message = require('../models/Message')

const getMessagebyUserId = async (req, res, next) => {
  try {
    const applicant = req.userId
    const requested = req.params.id

    const history = await Message.find({
      $or: [
        { Sender: applicant, Recipient: requested },
        { Sender: requested, Recipient: applicant }
      ]
    })
      .sort({ createdAt: 'desc' })
      .limit(30)

    res.status(200).json({
      success: true,
      count: history.length,
      data: history
    })
  } catch (error) {
    console.log('[❌]', error.message)
    res.status(400).json({ success: false, error: error.message })
    next()
  }
}

module.exports = {
  getMessagebyUserId
}
