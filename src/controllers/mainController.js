const { CoreController } = require('koa-clapp');

module.exports = class MainController extends CoreController {
    success(data) {
        this.ctx.body = {
            data,
        };
        this.ctx.status = 200;
    }
};
