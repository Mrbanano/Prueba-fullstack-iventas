const Role = require('../models/Role')
const Roles = require('../config/InitialRoles')

const CreateDefaultRoles = async () => {
  try {
    for (const rol of Roles) {
      const { Name, Description } = rol
      const foundRole = await Role.findOne({ Name })
      if (foundRole) {
        console.log('[✔️ ]', ' Roles default already exists')
        return
      }
      const newRole = await new Role({ Name, Description }).save()
      console.log('[✔️ ]', `The ${newRole.Name} was successfully created`)
    }
  } catch (error) {
    console.log('[❌]', error.message)
  }
}

module.exports = CreateDefaultRoles
