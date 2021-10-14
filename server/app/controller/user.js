'use strict';

const md5 = require('md5');
const BaseController = require('./base');

class UserController extends BaseController {
  async jwtSign({ id, username }) {
    const { app } = this;
    // const { username } = ctx.request.body;
    const token = app.jwt.sign(
      {
        id,
        username,
      },
      app.config.jwt.secret,
    );
    // ctx.session[username] = 1;
    await app.redis.set(username, token, 'EX', app.config.redisExpire);
    return token;
  }
  parseResult(ctx, result) {
    return {
      ...ctx.helper.unPick(result.dataValues, ['password']),
      createTime: ctx.helper.timestamp(result.createTime),
    };
  }

  async register() {
    const { ctx, app } = this;
    const params = ctx.params();
    const user = await ctx.service.user.getUser(params.username);
    if (user) {
      this.error('用户已存在');
      return;
    }

    const result = await ctx.service.user.add({
      ...params,
      password: md5(params.password + app.config.salt),
      createTime: ctx.helper.time(),
    });
    if (result) {
      const token = await this.jwtSign({
        id: result.id,
        username: result.username,
      });
      this.success({
        ...this.parseResult(ctx, result),
        token,
      });
    } else {
      this.error('注册失败');
    }
  }

  async login() {
    const { ctx } = this;
    const { username, password } = ctx.params();
    const user = await ctx.service.user.getUser(username, password);
    if (user) {
      const token = await this.jwtSign({
        id: user.id,
        username: user.username,
      });
      this.success({
        ...this.parseResult(ctx, user),
        token,
      });
    } else {
      this.error('该用户不存在');
    }
  }

  async detail() {
    const { ctx } = this;
    const user = await ctx.service.user.getUser(ctx.username);

    if (user) {
      this.success({
        ...this.parseResult(ctx, user),
      });
    } else {
      this.error('该用户不存在');
    }
  }

  async logout() {
    const { ctx, app } = this;
    try {
      await app.redis.del(ctx.username);
      this.success('success');
    } catch (error) {
      this.error('退出登录失败');
    }
  }

  async edit() {
    const { ctx } = this;
    const result = ctx.service.user.edit({
      ...ctx.params(),
      updateTime: ctx.helper.time(),
    });
    this.success(result);
  }
}

module.exports = UserController;
