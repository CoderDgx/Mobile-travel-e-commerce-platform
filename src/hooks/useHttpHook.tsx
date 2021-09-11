import { useState, useEffect } from 'react';
import { Http } from '@/utils';
import { Method } from 'axios';

interface HttpHookProps {
  url: string;
  method?: Method;
  headers?: any;
  body?: any;
  watch?: [];
}

export default function useHttpHook(props: HttpHookProps) {
  const { url, method = 'POST', headers = {}, body = {}, watch = [] } = props;
  const [result, setResult] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Http({
      url,
      method,
      headers,
      body,
      setResult,
      setLoading,
    });
  }, watch);

  return [result, loading];
}
