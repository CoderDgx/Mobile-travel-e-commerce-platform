import { history } from 'umi';

export function onRouteChange(route: any) {
  const nowPath = route.routes[0].routes.filter(
    (item: any) => item.path === route.location.pathname,
  );
  const isLogin = localStorage.getItem('username');

  if (nowPath.length === 1 && nowPath[0].auth && !isLogin) {
    history.push({
      pathname: '/login',
      query: {
        from: route.location.pathname,
      },
    });
  }
}
