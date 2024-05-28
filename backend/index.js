const express = require('express');

//safely use swagger
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const jsyaml = require('js-yaml');

const swaggerFiles = ['./endpoints/configTemplate/configTemplateSWG.yaml', './endpoints/packages/SWG.yaml'];
const swaggerDocuments = [];
swaggerFiles.forEach(swaggerFile =>
{
    const spec = fs.readFileSync(swaggerFile, 'utf8');
    const swaggerDocument = jsyaml.load(spec);
    swaggerDocuments.push(swaggerDocument);
});
const swaggerDocument = mergeSwaggerDocuments(swaggerDocuments);

const packagesRouter = require('./endpoints/packages/crud');
const configTemplateRouter = require('./endpoints/configTemplate/crud');

const app = express();

const port = 3000;

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Mount the routers
app.use('/packages', packagesRouter);
app.use('/configTemplate', configTemplateRouter);

// Start the server
app.listen(port, () =>
{
    console.log(`Server is running at http://localhost:${port}`);
});



// Function to merge multiple Swagger documents
function mergeSwaggerDocuments(documents)
{
    const mergedDocument = { ...documents[0] }; // Copy the first document

    // Merge paths from all documents
    for (let i = 1; i < documents.length; i++)
    {
        const document = documents[i];
        if (document.paths)
        {
            mergedDocument.paths = { ...mergedDocument.paths, ...document.paths };
        }
    }


    return mergedDocument;
}