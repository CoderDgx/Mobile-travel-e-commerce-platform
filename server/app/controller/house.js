'use strict';
const BaseController = require('./base');

class HouseController extends BaseController {
  async hot() {
    const { ctx } = this;
    const result = await ctx.service.house.hot();
    this.success(result);
  }

  async search() {
    const { ctx } = this;
    const result = await ctx.service.house.search(ctx.params());
    this.success(result);
  }

  async detail() {
    const { ctx } = this;
    const result = await ctx.service.house.detail(ctx.params('id'));
    this.success({
      info: result,
      banner: result.imgs,
    });
  }
}

module.exports = HouseController;
