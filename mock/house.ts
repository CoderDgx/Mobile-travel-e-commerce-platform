let count = 0;
export default {
  'post /api/house/search': (req: any, res: any) => {
    setTimeout(() => {
      let data: object[];
      if (req.body.pageNum < 4) {
        data = [
          {
            id: count++,
            img: 'https://img.meituan.net/phoenix/5e0cc58f76f78f31a4c80ba3d9572ee2329641.jpg@732w_412h_80Q_1e_1c',
            title: '东城民宿',
            info: '东城区交通方便',
            price: '100',
          },
          {
            id: count++,
            img: 'https://img.meituan.net/phoenix/5e0cc58f76f78f31a4c80ba3d9572ee2329641.jpg@732w_412h_80Q_1e_1c',
            title: '西城民宿',
            info: '西城区山水怡情',
            price: '120',
          },
          {
            id: count++,
            img: 'https://img.meituan.net/phoenix/5e0cc58f76f78f31a4c80ba3d9572ee2329641.jpg@732w_412h_80Q_1e_1c',
            title: '新区民宿',
            info: '新区民宿位置优越',
            price: '200',
          },
          {
            id: count++,
            img: 'https://img.meituan.net/phoenix/5e0cc58f76f78f31a4c80ba3d9572ee2329641.jpg@732w_412h_80Q_1e_1c',
            title: '老城民宿',
            info: '老城区风景秀美',
            price: '220',
          },
          {
            id: count++,
            img: 'https://img.meituan.net/phoenix/5e0cc58f76f78f31a4c80ba3d9572ee2329641.jpg@732w_412h_80Q_1e_1c',
            title: '东城民宿',
            info: '东城区交通方便',
            price: '100',
          },
          {
            id: count++,
            img: 'https://img.meituan.net/phoenix/5e0cc58f76f78f31a4c80ba3d9572ee2329641.jpg@732w_412h_80Q_1e_1c',
            title: '西城民宿',
            info: '西城区山水怡情',
            price: '120',
          },
          {
            id: count++,
            img: 'https://img.meituan.net/phoenix/5e0cc58f76f78f31a4c80ba3d9572ee2329641.jpg@732w_412h_80Q_1e_1c',
            title: '新区民宿',
            info: '新区民宿位置优越',
            price: '200',
          },
          {
            id: count++,
            img: 'https://img.meituan.net/phoenix/5e0cc58f76f78f31a4c80ba3d9572ee2329641.jpg@732w_412h_80Q_1e_1c',
            title: '老城民宿',
            info: '老城区风景秀美',
            price: '220',
          },
        ];
      } else {
        data = [];
        count = 0;
      }
      res.json({
        data,
      });
    }, 500);
  },
  'post /api/house/detail': {
    data: {
      id: 8,
      banner: [
        'https://z1.muscache.cn/im/pictures/miso/Hosting-45063845/original/ff52d039-04c6-4e96-abfa-a9f611723723.jpeg?aki_policy=xx_large',
        'https://z1.muscache.cn/im/pictures/miso/Hosting-45063845/original/7140550b-8d2f-4b45-9b6b-54aa6ef4fd1e.jpeg?aki_policy=x_large',
        'https://z1.muscache.cn/im/pictures/miso/Hosting-45063845/original/6918db21-f806-4189-9469-267c61c279f5.jpeg?aki_policy=x_large',
      ],
      info: {
        title: '大梅沙民宿',
        msg: '180°一线海景飘窗',
        price: '220',
        publishTime: 1595238771000,
        startTime: 1595238771000,
        endTime: 1597917171000,
      },
    },
  },
  'post /api/comments/lists': (req: any, res: any) => {
    setTimeout(() => {
      let data: object[];
      if (req.body.pageNum < 4) {
        data = [
          {
            id: count++,
            avatar:
              'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            username: 'user',
            createTime: 1595238771000,
            info: '房屋很满意',
          },
          {
            id: count++,
            avatar:
              'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            username: 'user',
            createTime: 1595238771000,
            info: '空气清新',
          },
          {
            id: count++,
            avatar:
              'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            username: 'user',
            createTime: 1595238771000,
            info: '态度温和',
          },
          {
            id: count++,
            avatar:
              'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            username: 'user',
            createTime: 1595238771000,
            info: '早餐味道美',
          },
          {
            id: count++,
            avatar:
              'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            username: 'user',
            createTime: 1595238771000,
            info: '态度温和',
          },
          {
            id: count++,
            avatar:
              'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            username: 'user',
            createTime: 1595238771000,
            info: '早餐味道美',
          },
          {
            id: count++,
            avatar:
              'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            username: 'user',
            createTime: 1595238771000,
            info: '态度温和',
          },
          {
            id: count++,
            avatar:
              'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            username: 'user',
            createTime: 1595238771000,
            info: '早餐味道美',
          },
        ];
      } else {
        data = [];
        count = 0;
      }
      res.json({
        data,
      });
    }, 500);
  },
};
