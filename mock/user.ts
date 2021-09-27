export default {
  'post /api/user/detail': {
    data: {
      id: 10,
      username: '测试用户',
      avatar:
        'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      phone: 12345678901,
      sign: '一蓑烟雨任平生',
    },
  },
  'post /api/user/edit': {
    data: 'success',
  },
  'post /api/user/login': {
    data: {
      id: 100,
      username: 'admin',
    },
  },
  'post /api/user/register': {
    data: {
      id: 100,
      username: 'admin',
    },
  },
  'post /api/user/logout': {
    data: {
      id: 100,
      username: 'admin',
    },
  },
};
