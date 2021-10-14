'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  const userExist = app.middleware.userExist();
  router.post('/api/user/register', controller.user.register);
  router.post('/api/user/login', controller.user.login);
  router.post('/api/user/detail', userExist, controller.user.detail);
  router.post('/api/user/logout', controller.user.logout);
  router.post('/api/user/edit', controller.user.edit);
  router.post('/api/commons/city', controller.commons.city);
  router.post('/api/house/hot', controller.house.hot);
  router.post('/api/house/search', controller.house.search);
  router.post('/api/house/detail', controller.house.detail);
  router.post('/api/comment/add', controller.comment.add);
  router.post('/api/comment/lists', controller.comment.lists);
  router.post('/api/orders/hasOrder', userExist, controller.orders.hasOrder);
  router.post('/api/orders/addOrder', userExist, controller.orders.addOrder);
  router.post('/api/orders/delOrder', userExist, controller.orders.delOrder);
};
