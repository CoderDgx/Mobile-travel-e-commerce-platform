'use strict';
module.exports = (options) => {
  return async (ctx, next) => {
    // console.log(ctx.app.router)
    const flag = ctx.app.router.stack.filter((item) => {
      return item.regexp.test(ctx.request.url);
    });

    if (flag.length) {
      await next();
    } else {
      ctx.body = {
        status: 404,
        errMsg: '接口 ' + ctx.request.url + ' 不存在',
      };
    }
  };
};
