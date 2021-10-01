'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {
  success(data = {}) {
    const { ctx } = this;
    ctx.body = {
      status: 'success',
      data,
    };
  }

  error(errMsg = '') {
    const { ctx } = this;
    ctx.body = {
      status: 'error',
      errMsg,
    };
  }
}

module.exports = BaseController;
