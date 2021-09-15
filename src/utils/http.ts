import { Toast } from 'antd-mobile';
import axios, { Method, AxiosResponse } from 'axios';

interface HttpProps {
  url: string;
  method: Method;
  headers?: any;
  body?: any;
  setResult: React.Dispatch<any>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Http(props: HttpProps) {
  const { url, method, headers, body, setResult, setLoading } = props;

  setLoading && setLoading(true);

  let defaultHeader = {
    'Content-type': 'application/json',
  };

  let params: any;
  if (method.toUpperCase() === 'GET') {
    params = undefined;
  } else {
    params = {
      headers: {
        ...defaultHeader,
        ...headers,
      },
      method,
      body,
    };
  }

  return new Promise((resolve, reject) => {
    axios({
      method: params.method,
      url: '/api' + url,
      headers: params.headers,
      data: {
        ...params.body,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          resolve(res.data);
          setResult && setResult(res.data.data);
        } else {
          if (res.status === 1001) {
            // location.href = '/login?from=' + location.pathname;
            location.hash = '#/login?from=' + location.pathname;
            localStorage.clear();
          }
          Toast.fail(res.request);
          reject(res.request);
        }
      })
      .catch((err) => {
        Toast.fail(err);
        reject(err);
      })
      .finally(() => {
        setLoading && setLoading(false);
      });
  });
}
