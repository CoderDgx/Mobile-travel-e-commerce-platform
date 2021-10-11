'use strict';
const BaseService = require('./base');

class HouseService extends BaseService {
  commonAttr(app) {
    return {
      order: [['showCount', 'DESC']],
      attributes: {
        exclude: ['startTime', 'endTime', 'publishTime'],
      },
      include: [
        {
          model: app.model.Imgs,
          limit: 1,
          attributes: ['url'],
        },
      ],
    };
  }
  async hot() {
    return this.run(async (ctx, app) => {
      const result = await ctx.model.House.findAll({
        ...this.commonAttr(app),
        limit: 4,
      });
      return result;
    });
  }

  async search(params) {
    return this.run(async (ctx, app) => {
      const { lte, gte, like } = app.Sequelize.Op;
      const where = {
        cityCode: Array.isArray(params.code) ? params.code[0] : params.code,
        startTime: {
          [lte]: params.startTime,
        },
        endTime: {
          [gte]: params.endTime,
        },
        name: {
          [like]: '%' + params.houseName + '%',
        },
      };
      if (!params.houseName) {
        delete where.name;
      }
      const result = await ctx.model.House.findAll({
        ...this.commonAttr(app),
        limit: 8,
        offset: (params.pageNum - 1) * params.pageSize,
        where,
      });

      return result;
    });
  }

  async detail(id) {
    return this.run(async (ctx, app) => {
      const result = await ctx.model.House.findOne({
        where: {
          id,
        },
        include: [
          {
            model: app.model.Imgs,
            attributes: ['url'],
          },
        ],
      });

      await ctx.model.House.update(
        {
          showCount: result.showCount + 1,
        },
        {
          where: {
            id,
          },
        },
      );
      return result;
    });
  }
}

module.exports = HouseService;
