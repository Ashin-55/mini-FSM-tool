const winston = require("winston")

module.exports.logger = winston.createLogger({
    format:winston.format.json(),
    transports:[
        new winston.transports.Console()
    ]
})