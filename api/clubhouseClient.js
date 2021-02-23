process.env.DEBUG = '*'

// eslint-disable-next-line
// require = require('esm')(module)

const fs = require('fs')
const path = require('path')

const { Client, profiles } = require('clubhouse-api')

const initializeClubhouseClient = () => {
  // Initialize clubhouse client
  const czechLocale = {
    languages: 'cs-CZ',
    locale: 'cs-CZ',
    acceptLanguages: 'en-US;q=1'
  }

  const profile = {
    ...profiles.application.a304,
    ...profiles.locales.English,
    // ...czechLocale
  }
  const profileLoc = path.join(__dirname, './profile.json')

  if (fs.existsSync(profileLoc)) {
    const ctx = JSON.parse(fs.readFileSync(profileLoc))
    profile.token = ctx.tokens.auth
    profile.userId = ctx.user.user_id
    profile.deviceId = ctx.deviceId
  } else {
    console.log(
      "=============================================\n" +
      "|| Error: YOU ARE NOT LOGGED IN TO CLUBHOUSE! \n" +
      "|| To use the Clubhouse Client, you need to login to your Clubhouse account first through CLI. \n" +
      "|| Please run `npm run login` to login to your Clubhouse account. Login feature through UI is not implemented yet. \n" +
      "============================================="
    )
    process.exit(1)
  }

  const clubhouse = new Client({ profile: profile })
  return {clubhouse, profile}
}

const clubhouseClient = () => {
  console.log("Initializing Clubhouse client")
  const {clubhouse, profile} = initializeClubhouseClient()
  return (req, res, next) => {
    console.log("Applying Clubhouse client values previously computed")
    req.clubhouse = clubhouse
    req.profile = profile
    next()
  }
}

module.exports = clubhouseClient
