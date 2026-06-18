const YAML = require('yamljs')
const swaggerDoc = YAML.load("./src/docs/swagger.yaml")

module.exports = swaggerDoc;