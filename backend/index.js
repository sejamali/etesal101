const express = require('express');

//safely use swagger
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const jsyaml = require('js-yaml');

const packagesRouter = require('./endpoints/packages/crud');
const packagesRouterSWG = jsyaml.load(fs.readFileSync('./endpoints/packages/packagesSWG.yaml', 'utf8'));

const configTemplateRouter = require('./endpoints/configTemplate/crud');
const configTemplateRouterSWG = jsyaml.load(fs.readFileSync('./endpoints/configTemplate/configTemplateSWG.yaml', 'utf8'));

const app = express();

const port = 3000;

app.use(express.json());


// Mount the routers
app.use('/packages', packagesRouter);
app.use('/packagesSWG', swaggerUi.serve, swaggerUi.setup(packagesRouterSWG));

app.use('/configTemplate', configTemplateRouter);
app.use('/configTemplateSWG', swaggerUi.serve, swaggerUi.setup(configTemplateRouterSWG));

// Start the server
app.listen(port, () =>
{
    console.log(`Server is running at http://localhost:${port}`);
});