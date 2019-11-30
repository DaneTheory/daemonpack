<div align="center">
  <img width="300" height="200"
    src="https://raw.githubusercontent.com/Gherciu/daemonpack/master/logo.jpg">
  <h1>daemonpack</h1>
  <p>👹 daemonpack is a node-daemon script template repository.</p>
</div>

[![GitHub](https://img.shields.io/github/license/Gherciu/daemonpack)](https://github.com/Gherciu/daemonpack/blob/master/LICENSE)
[![Daemonpack](https://img.shields.io/badge/Generated%20from-Gherciu%2Fdaemonpack-green)](https://github.com/Gherciu/daemonpack)

## Getting started.

- Clone the repo: `git clone https://github.com/Gherciu/daemonpack.git`
- Edit entry file `index.js` with your code and configuration variables in `.env` file
- Start the prod job: `npm run serve` in background.This comand will start a persistent node process, that will restart every time when you start your PC.

## Configuration

To change the configuration variables, just edit thats in `.env` file.

- `CRON_PATTERN` - a cron pattern.This is useful if you want to start this script with custom date time. By defaul is seted to everyday at `8:00, 12:00, 16:00, 20:00, 24:00`

- To start job in watch mode just run: `npm run start`.

## CLI Commands

`npm run start` - to start the script in watch/development mode.

`npm run serve` - to start the script in daemon/background production mode.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**[@Gherciu/daemonpack](https://github.com/Gherciu/daemonpack)** © [GHERCIU](https://github.com/Gherciu), Released under the [MIT](https://github.com/Gherciu/daemonpack/blob/master/LICENSE) License.<br>
Authored and maintained by GHERCIU with help from contributors ([list](https://github.com/Gherciu/daemonpack/contributors)).

#### If you like this repository star⭐ and watch👀 on [GitHub](https://github.com/Gherciu/daemonpack)
