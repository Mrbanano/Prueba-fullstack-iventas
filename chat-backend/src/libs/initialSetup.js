const CreateDefaultUsers = require('./CreateDefaultUsers')
const CreateDefaultRoles = require('./CreateDefaultRoles')

const initialSetups = async () => {
  await CreateDefaultRoles()
  await CreateDefaultUsers()
}

module.exports = initialSetups
