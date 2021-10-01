'use strict';

const Controller = require('egg').Controller;
const md5 = require('md5');
const dayjs = require('dayjs');

class UserController extends Controller {
  async register() {
    const { ctx, app } = this.props;
    const parmas = ctx.request.body;
    const user = await ctx.service.user.getUser(parmas.username);

    if (user) {
      ctx.body = {
        status: 500,
        errMsg: 'User already registered',
      };
      return;
    }

    const result = await ctx.model.User.add({
      ...parmas,
      password: md5(parmas.password + app.config.salt),
      createTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    });
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: 'User already registered',
      };
    }
  }
}

module.exports = UserController;
