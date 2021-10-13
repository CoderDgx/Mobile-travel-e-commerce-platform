'use strict';
const Basecontroller = require('./base');

class CommentController extends Basecontroller {
  async add() {
    const { ctx } = this;
    const user = await ctx.service.user.getUser(ctx.username);
    const result = await ctx.service.comment.add({
      userId: user.id,
      houseId: ctx.params('houseId'),
      msg: ctx.params('comment'),
      createTime: ctx.helper.time(),
    });

    this.success(result);
  }

  async lists() {
    const { ctx } = this;
    const user = await ctx.service.user.getUser(ctx.username);
    const result = await ctx.service.comment.lists(ctx.params(), user.id);

    this.success(result);
  }
}

module.exports = CommentController;
