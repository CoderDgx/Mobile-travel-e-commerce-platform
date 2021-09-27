import React, { FC, useState, memo } from 'react';
import { Picker, List, Calendar, Button, Toast } from 'antd-mobile';
import { ScheduleOutlined } from '@ant-design/icons';
import { history } from 'umi';
import dayjs from 'dayjs';

export interface PickerData {
  value: string | number;
  label: React.ReactNode;
  children?: PickerData[];
}

interface SearchProps {
  city: PickerData[] | PickerData[][];
  cityLoading: boolean;
}

const Search: FC<SearchProps> = (props) => {
  const { city, cityLoading } = props;
  // const [citys, setCitys] = useState([[{ label: '杭州', value: '10001' }, { label: '苏州', value: '10002' }]]);
  const [selectedCity, setSelectedCity] = useState(['10001']);
  const [times, setTimes] = useState('');
  const [dataShow, setDataShow] = useState(false);

  const handelCityChange = (value: string[]) => {
    setSelectedCity(value);
  };

  const handelDateConfirm = (startTime: Date, endTime: Date) => {
    setTimes(
      dayjs(startTime).format('YYYY-MM-DD') +
        '~' +
        dayjs(endTime).format('YYYY-MM-DD'),
    );
    setDataShow(false);
  };

  const handleClick = () => {
    if (times.includes('~')) {
      history.push({
        pathname: '/search',
        query: {
          code: selectedCity,
          startTime: times.split('~')[0],
          endTime: times.split('~')[1],
        },
      });
    } else {
      Toast.fail('请选择时间');
    }
  };

  return (
    <div className="search">
      <div className="serach-city">
        {!cityLoading && (
          <Picker
            title="城市"
            data={city}
            value={selectedCity}
            cascade={false}
            cols={1}
            onChange={(value) => handelCityChange(value as string[])}
          >
            <List.Item>可选城市</List.Item>
          </Picker>
        )}
      </div>
      <div className="search-time" onClick={() => setDataShow(!dataShow)}>
        <p className="search-time-left">出租时间</p>
        <p className="search-time-right">
          {times === '' ? <ScheduleOutlined /> : times}
        </p>
      </div>

      <Calendar
        visible={dataShow}
        onCancel={() => setDataShow(false)}
        onConfirm={(startTime, endTime) =>
          handelDateConfirm(startTime!, endTime!)
        }
      />

      <Button type="warning" size="large" onClick={handleClick}>
        搜索民宿
      </Button>
    </div>
  );
};

function areEqual(prevProps: any, nextProps: any) {
  if (
    prevProps.city === nextProps.city &&
    prevProps.cityLoading === nextProps.cityLoading
  ) {
    return true;
  } else {
    return false;
  }
}

export default memo(Search, areEqual);
