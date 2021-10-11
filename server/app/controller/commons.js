'use strict';
const BaseController = require('./base');

class CommonsController extends BaseController {
  async city() {
    try {
      const result = [
        [
          {
            label: '杭州',
            value: '10001',
          },
          {
            label: '苏州',
            value: '10002',
          },
          {
            label: '上海',
            value: '10003',
          },
          {
            label: '北京',
            value: '10004',
          },
          {
            label: '广州',
            value: '10005',
          },
          {
            label: '深圳',
            value: '10006',
          },
        ],
      ];
      if (result) {
        this.success(result);
      } else {
        this.error('获取城市数据失败');
      }
    } catch (error) {
      this.error('获取城市数据失败');
    }
  }
}

module.exports = CommonsController;
