const path = require('path')
const chalk = require('chalk')
const execa = require('execa')
const moment = require('moment')
const { CronJob } = require('cron')
const getRandomString = require('./utils/getRandomString')

require('dotenv').config({
  path: path.join(__dirname, '/.env'),
})

const { log } = console
const { APP_NAME, CRON_PATTERN } = process.env

// initializing a cron job (adding 0 before cron_pattern to prevent running script on every second)
/* eslint-disable no-new */
new CronJob(
  `0 ${CRON_PATTERN}`,
  () => {
    log(
      chalk.blue(`${APP_NAME}`),
      chalk.white(
        `- has ben started at ${moment().format('DD/MM/YYYY-hh:mm')}!`,
      ),
    )
    log(`
      ${chalk.yellow('Config:')}
      ${chalk.blue('CRON_PATTERN')}: ${CRON_PATTERN}
    `)

    // eslint-disable-next-line
    ;(async () => {
      const { stdout } = await execa('echo', [getRandomString()])
      log(chalk.blue(stdout))
    })()
  },
  null,
  true,
)
