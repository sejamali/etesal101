const express = require('express');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const jsyaml = require('js-yaml');

const subscriptionByUUIDRouter = require('./endpoints/subscription/byUUID');

const packagesRouter = require('./endpoints/packages/crud');
const SWG = jsyaml.load(fs.readFileSync('./endpoints/SWG.yaml', 'utf8')); // Load  Swagger file

const configTemplateRouter = require('./endpoints/configTemplate/crud');

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(SWG));

// Mount the routers
app.use('/configTemplate', configTemplateRouter);
app.use('/subscriptionByUUID', subscriptionByUUIDRouter);

app.use('/packages', packagesRouter);


// Start the server
app.listen(port, () =>
{
    console.log(`Server is running at http://localhost:${port}`);
});
