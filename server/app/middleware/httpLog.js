'use strict';
const dayjs = require('dayjs');
const fs = require('fs');

module.exports = (options) => {
  return async (ctx, next) => {
    console.log(options);
    const sTime = Date.now();
    const startTime = dayjs(Date.now()).format('YYYY-MM-DD HH:mm:ss');
    const req = ctx.request;
    await next();
    const log = {
      method: req.method,
      url: req.url,
      data: req.body,
      startTime,
      endTime: dayjs(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
      timeLength: Date.now() - sTime,
    };
    const data =
      dayjs(Date.now()).format('YYYY-MM-DD HH:mm:ss') +
      ' [httpLog] ' +
      JSON.stringify(log) +
      '\r\n';
    fs.appendFileSync(ctx.app.baseDir + '/htttpLog.log', data);
  };
};
