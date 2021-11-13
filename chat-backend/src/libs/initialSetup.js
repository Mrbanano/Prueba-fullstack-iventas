const createDefaultCustomer = require('./CreateDefaultCustomer')
const createDefaultVendor = require('./CreateDefaultVendor')

const initialSetups = async () => {
  await createDefaultCustomer()
  await createDefaultVendor()
}

module.exports = initialSetups
