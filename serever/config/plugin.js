'use strict';
const path = require('path');

exports.validate = {
  enable: true,
  package: 'egg-validate',
};

exports.ejs = {
  enable: true,
  package: 'egg-view-ejs',
};

exports.auth = {
  enable: true,
  path: path.join(__dirname, '../lib/plugin/egg-auth'),
};

exports.info = {
  enable: true,
  path: path.join(__dirname, '../lib/plugin/egg-info'),
};

exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};

exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};

exports.jwt = {
  enable: true,
  package: 'egg-jwt',
};

exports.redis = {
  enable: true,
  package: 'egg-redis',
};
