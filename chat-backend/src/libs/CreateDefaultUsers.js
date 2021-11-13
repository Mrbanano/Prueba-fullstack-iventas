const User = require('../models/User')
const Role = require('../models/Role')
const Users = require('../config/InitialUsers')

const CreateDefaultUsers = async () => {
  try {
    for (const user of Users) {
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
        Problem,
        Roles
      } = user

      const foundUser = await User.findOne({ Email })
      if (foundUser) {
        console.log('[✔️ ]', ' User default already exists')
        return
      }

      const rol = await Role.findOne({ Name: Roles })

      const newUser = await new User({
        Name,
        lastName,
        Avatar,
        Age,
        Email,
        Password: await User.encryptPassword(Password),
        CURP,
        Phone,
        Priotiry,
        Problem,
        Roles: rol._id
      })
      const newUserSaved = await newUser.save()
      console.log('[✔️ ]', `${newUserSaved.Name} was successfully created`)
    }
  } catch (error) {
    console.log('[❌]', error.message)
  }
}

module.exports = CreateDefaultUsers
