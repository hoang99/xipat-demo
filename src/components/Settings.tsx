import { Button, DatePicker, Form, Input, message, Space } from "antd";
import { useRef } from "react";

const { RangePicker } = DatePicker;

function Settings() {
  const [form] = Form.useForm();
  const bgInput = useRef(null);
  // const [hideBtnSubmit, setHideBtnSubmit] = useState<boolean>(false);
  const onFinish = (value: any) => {
    message.success("Submit success!");
    console.log(value);
  };

  const onFinishFailed = () => {
    message.error("Submit failed!");
  };
  const rangeConfig = {
    rules: [
      {
        type: "array" as const,
        required: true,
        message: "Please select time!",
      },
    ],
  };

  const onColorChange = (e: any) => {
    if (bgInput.current) {
      (bgInput.current as any).input.style.color = e.target.value;
    }
  };

  return (
    <>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please input your title!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true },
            { type: "email", warningOnly: true },
            { type: "string", min: 6 },
          ]}
        >
          <Input placeholder="input placeholder" />
        </Form.Item>

        <Form.Item
          label="BackgroundColor"
          name="backgroundColor"
          rules={[
            { required: true, message: "Please input your Background Color!" },
          ]}
          style={{
            display: "inline-block",
            width: 500,
          }}
        >
          <Input
            ref={bgInput}
            style={{
              marginRight: 8,
            }}
          />
        </Form.Item>
        <Input
          type="color"
          onChange={onColorChange}
          style={{ width: 50, marginTop: 32, marginLeft: 4 }}
        ></Input>

        <Form.Item name="range-picker" label="RangePicker" {...rangeConfig}>
          <RangePicker />
        </Form.Item>

        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  );
}
export default Settings;
