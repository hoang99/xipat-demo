import { Button, Input, Modal, Table, Typography } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
const { Title } = Typography;
const { Search } = Input;

interface PostItems {
  id: number;
  userId?: number;
  title?: string;
  body?: string;
}

function Posts() {
  const [postItems, setPostItems] = useState<PostItems[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postDetails, setPostDetails] = useState<PostItems>();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        const postItems = res.data;
        setPostItems(postItems);
      })
      .catch((error) => console.log(error));
  }, []);

  function showModal(record: PostItems) {
    setPostDetails(record);
    setIsModalOpen(true);
  }

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handle = () => {};
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      render: (text: any) => <a>{text}</a>,
    },
    {
      title: "User Id",
      dataIndex: "userId",
      key: "userId",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (index: any, record: PostItems) => (
        <>
          <Button type="primary" onClick={() => showModal(record)}>
            Details
          </Button>
          <Modal
            title="Detail Posts Modal"
            open={isModalOpen}
            onOk={handleOk}
            // maskStyle={{ opacity: 0.1 }}
            mask={false}
            onCancel={handleCancel}
          >
            <Title level={3}>User Id: {postDetails?.userId}</Title>
            <Title level={3}>Title: {postDetails?.title}</Title>
            <Title level={3}>Body: {postDetails?.body}</Title>
          </Modal>
        </>
      ),
    },
  ];

  const onSearch = async (value: string) => {
    await axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        const postItems = res.data?.filter(
          (post: PostItems) =>
            (post.title &&
              post.title.trim().toLocaleLowerCase().indexOf(value) > -1) ||
            (post.userId && post.userId?.toString().indexOf(value) > -1)
        );
        setPostItems(postItems);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Search
        placeholder="Enter your User Id or Title"
        onSearch={onSearch}
        style={{ width: 250, marginBottom: 8 }}
      />

      <Table
        columns={columns}
        dataSource={postItems}
        loading={postItems ? false : true}
      ></Table>
    </>
  );
}
export default Posts;
