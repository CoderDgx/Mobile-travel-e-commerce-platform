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
        count = 9;
      }
      res.json({
        data,
      });
    }, 500);
  },
};
