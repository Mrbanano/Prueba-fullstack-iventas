const Customer = require('../models/Customer')
const Vendor = require('../models/Vendor')

const SignUp = async (req, res, next) => {}

const SignIn = async (req, res, next) => {
  try {
    const Email = req.body.Email
    const isCustomer = await Customer.findOne({ Email })
    const isVendor = await Vendor.findOne({ Email })

    console.log(isCustomer)
    console.log(isVendor)

    res.status(200).json({
      isCustomer,
      isVendor
    })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  SignIn,
  SignUp
}
