const compress = require('koa-compress');
const cors = require('kcors');
const etag = require('koa-etag');
const helmet = require('koa-helmet');
const Clapp = require('koa-clapp');

const app = new Clapp({
    appName: 'simple-api',
    version: '1.0.0',
    port: 3000,
    socket: true,
    logging: true,
    errors: true,
});

app.use(cors({ exposeHeaders: ['Content-Disposition'] }))
    .use(compress())
    .use(etag())
    .use(helmet());

app.run();
