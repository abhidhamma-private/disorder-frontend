import React, { useState } from 'react';
import { FEED_QUERY, UPLOAD } from './WriteQuries';
import useInput from '../../Hooks/useInput';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useMutation, useQuery } from '@apollo/react-hooks';
import WritePresenter from './WritePresenter';
import { READ_MYDATA } from '../../sharedQueries';
import Loader from 'Components/Loader';

export default () => {
  const [fileUrl, setFileUrl] = useState('');
  const think = useInput('');
  const [postUploadMutation] = useMutation(UPLOAD, {
    refetchQueries: () => [{ query: FEED_QUERY }],
  });
  const { data, loading } = useQuery(READ_MYDATA);

  const upload = async event => {
    const file = event.target.files[0];

    const formData = new FormData();
    formData.append('file', file);
    try {
      const {
        data: { path },
      } = await axios.post('http://192.168.0.79:4000/api/upload', formData, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      });
      if (path === undefined) {
        setFileUrl('upLoadFail');
      } else {
        setFileUrl(path);
      }
    } catch (e) {
      console.log('upload fail : ', e);
      setFileUrl('upLoadFail');
    }
  };

  const onWriteSubmit = async event => {
    event.preventDefault();
    console.log('서브밋');
    console.log(fileUrl === '');
    if (fileUrl === '' || fileUrl === 'upLoadFail') {
      toast.info('첨부된 파일이없어 랜덤한 이미지로 작성됩니다.');
    }

    try {
      console.log(fileUrl);
      await postUploadMutation({
        variables: {
          title: '치료적일기',
          caption: think.value,
          files: [fileUrl],
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <WritePresenter
          myData={data.readMyData}
          upload={upload}
          onWriteSubmit={onWriteSubmit}
          think={think}
        />
      )}
    </>
  );
};
