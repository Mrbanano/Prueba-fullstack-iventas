const Customer = require('../models/Customer')
const { customer } = require('../config/InitialUsers')

const createDefaultCustomer = async () => {
  try {
    const {
      Name,
      lastName,
      Avatar,
      Age,
      Email,
      Password,
      CURP,
      Phone,
      Priotiry,
      Problem
    } = customer

    const foundCustomer = await Customer.findOne({ Email })
    if (foundCustomer) {
      console.log('[✔️ ]', ' Customer default already exists')
      return
    }
    const newCustomer = await new Customer({
      Name,
      lastName,
      Avatar,
      Age,
      Email,
      Password: await Customer.encryptPassword(Password),
      CURP,
      Phone,
      Priotiry,
      Problem
    }).save()
    console.log('[✔️ ]', 'Customer default created')
  } catch (error) {
    console.log('[❌]', error.message)
  }
}

module.exports = createDefaultCustomer
