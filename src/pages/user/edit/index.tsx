import React, { useState, useEffect } from 'react';
import { List, ImagePicker, Toast, InputItem, Button } from 'antd-mobile';
import { createForm } from 'rc-form';
import { useStoreHook } from 'think-react-store';
import { history } from 'umi';

function Edit(props: any) {
  const { getFieldProps, validateFields } = props.form;
  const {
    user: { editUserAsync, getUserAsync, avatar, phone, sign },
  } = useStoreHook();
  const [files, setFiles] = useState([{ url: avatar }]);

  const handleChange = (files: any) => {
    // console.log(files)
    if (files[0]?.file?.size / 1024 / 1024 > 0.5) {
      Toast.fail('图片大小不能大于0.5M');
      return;
    }
    setFiles(files);
  };

  const handleSubmit = () => {
    if (!files.length) {
      Toast.fail('请上传图片');
      return;
    }
    validateFields((error: any, value: any) => {
      if (error) {
        Toast.fail('请将信息补充完整');
        return;
      } else {
        editUserAsync({
          avatar: files[0].url,
          phone: value.tel,
          sign: value.sign,
        });
      }
    });
  };

  useEffect(() => {
    // console.log(props)
    getUserAsync({});
  }, []);

  return (
    <div className="user-edit">
      <List>
        <ImagePicker
          files={files}
          selectable={files.length < 1}
          onChange={handleChange}
        />
        <InputItem
          {...getFieldProps('tel', {
            rules: [{ required: true }],
            initialValue: phone,
          })}
          placeholder="电话"
        >
          电话：
        </InputItem>
        <InputItem
          {...getFieldProps('sign', {
            rules: [{ required: true }],
            initialValue: sign,
          })}
          placeholder="签名"
        >
          签名：
        </InputItem>
      </List>
      <Button
        type="warning"
        style={{ marginTop: '20px' }}
        onClick={handleSubmit}
      >
        修改
      </Button>
      <Button
        style={{ marginTop: '20px' }}
        onClick={() =>
          history.push({
            pathname: '/user',
          })
        }
      >
        返回
      </Button>
    </div>
  );
}

export default createForm()(Edit);
