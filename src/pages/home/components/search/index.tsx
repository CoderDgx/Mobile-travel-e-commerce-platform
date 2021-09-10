import React, { FC, useState } from 'react';
import { Picker, List, Calendar, Button } from 'antd-mobile';
import { ScheduleOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

const Search: FC = props => {
  const [citys, setCitys] = useState([
    [
      { label: '杭州', value: '10001' },
      { label: '苏州', value: '10002' },
    ],
  ]);
  const [selectedCity, setSelectedCity] = useState(['10001']);
  const [times, setTimes] = useState('');
  const [dataShow, setDataShow] = useState(false);

  const handelCityChange = (value: string[]) => {
    console.log(value);
    setSelectedCity(value);
  };

  const handelDateConfirm = (startTime: Date, endTime: Date) => {
    setTimes(
      dayjs(startTime).format('YYYY-MM-DD') +
        '~' +
        dayjs(endTime).format('YYYY-MM-DD'),
    );
    setDataShow(false)
  }
  return (
    <div className="search">
      <div className="serach-city">
        <Picker
          title="城市"
          data={citys}
          value={selectedCity}
          cascade={false}
          cols={1}
          onChange={value => handelCityChange(value as string[])}
        >
          <List.Item>可选城市</List.Item>
        </Picker>
      </div>
      <div className="search-time" onClick={() => setDataShow(!dataShow)}>
        <p className="search-time-left">出租时间</p>
        <p className="search-time-right">{times === '' ? <ScheduleOutlined /> : times}</p>
      </div>

      <Calendar visible={dataShow}
        onCancel={() => setDataShow(false)}
        onConfirm={(startTime, endTime) => handelDateConfirm(startTime!, endTime!)}
      />

      <Button type="warning" size="large">搜索民宿</Button>
    </div>
  );
};

export default Search;
