var Metalsmith = require('metalsmith'),
    markdown   = require('metalsmith-markdown'),
    templates  = require('metalsmith-templates'),
    sass       = require('metalsmith-sass');


Metalsmith(__dirname)
    .use(markdown())
    .use(templates('handlebars'))
    .use(sass({
    	outputDir: 'css/',
    	outputStyle: "expanded"
    }))
    .destination('./build')
    .build()