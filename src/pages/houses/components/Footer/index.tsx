import React, { FC, useState } from 'react';
import { TextareaItem, Button, Toast, Modal, Icon } from 'antd-mobile';
import { useStoreHook } from 'think-react-store';
import { useLocation } from 'umi';

export const Footer: FC = (props) => {
  const [show, setShow] = useState(false);
  const [commentsValue, setCommentsValue] = useState('');
  const { query } = useLocation();
  const {
    house: { addCommentsAsync },
  } = useStoreHook();

  const handleClick = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleChange = (value: any) => {
    setCommentsValue(value);
  };

  const handleSubmit = () => {
    if (commentsValue) {
      handleClose();
      addCommentsAsync({
        comment: commentsValue,
        houseId: query?.id,
      });
    } else {
      Toast.fail('请添加评论');
    }
  };

  const modalTitle = () => {
    return <Icon type="cross" style={{ right: 0 }} />;
  };

  return (
    <>
      <div className="footer" onClick={handleClick}>
        我来评论...
      </div>
      <Modal
        popup
        visible={show}
        animationType="slide-up"
        style={{
          height: '200px',
          bottom: '0px',
        }}
        onClose={handleClose}
      >
        <Icon type="cross" className="modal-title" onClick={handleClose} />
        <div className="modal-comment">
          <TextareaItem rows={2} count={200} onChange={handleChange} />
          <Button className="comment-btn" type="warning" onClick={handleSubmit}>
            评论
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default Footer;
