const Vendor = require('../models/Vendor')
const { vendor } = require('../config/InitialUsers')

const CreateDefaultVendor = async () => {
  try {
    const { Name, lastName, Phone, Avatar, Email, Password } = vendor
    const foundVendor = await Vendor.findOne({ Email })
    if (foundVendor) {
      console.log('[✔️ ]', ' Vendor default already exists')
      return
    }
    const newVendor = await new Vendor({
      Name,
      lastName,
      Phone,
      Avatar,
      Email,
      Password: await Vendor.encryptPassword(Password)
    }).save()
    console.log('[✔️ ]', ' Vendor default created')
  } catch (error) {
    console.log('[❌]', error.message)
  }
}

module.exports = CreateDefaultVendor
