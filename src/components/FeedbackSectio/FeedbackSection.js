import React from "react";
import "./feedback.css";
import { Row, Col, Button, Input, Form, message } from "antd";

export default () => {
  const [form] = Form.useForm();
  const key = "sentSuccess";

  const onFinishHandle = (values) => {
    console.log("Submission data", values);
    message.success({
      content: "Your message has been sent successfully",
      key,
    });
    form.resetFields();
  };

  return (
    <Form form={form} name="feedback" onFinish={onFinishHandle}>
      <Row gutter={[8, 8]} justify={"center"}>
        <Col
          xs={{ span: 20 }}
          sm={{ span: 11 }}
          md={{ span: 9 }}
          lg={{ span: 7 }}
          xl={{ span: 6 }}
          xxl={{ span: 5 }}
        >
          <Form.Item name="name" rules={[{ required: true }]}>
            <Input placeholder="Name" size="large" />
          </Form.Item>
        </Col>
        <Col
          xs={{ span: 20 }}
          sm={{ span: 11 }}
          md={{ span: 9 }}
          lg={{ span: 7 }}
          xl={{ span: 6 }}
          xxl={{ span: 5 }}
        >
          <Form.Item
            name="email"
            rules={[
              { required: true },
              { pattern: /\S+@\S+\.\S+/, message: "Please, enter an email" },
            ]}
          >
            <Input placeholder="Email" size="large" />
          </Form.Item>
        </Col>
      </Row>
      <Row justify={"center"} gutter={[8, 8]}>
        <Col
          xs={{ span: 20 }}
          sm={{ span: 22 }}
          md={{ span: 18 }}
          lg={{ span: 14 }}
          xl={{ span: 12 }}
          xxl={{ span: 10 }}
        >
          <Form.Item name="message" rules={[{ required: true }]}>
            <Input.TextArea
              placeholder="Message"
              autoSize={{ minRows: 6 }}
              className="feedback-textarea"
            ></Input.TextArea>
          </Form.Item>
        </Col>
      </Row>
      <div className="sendButton-container">
        <Button className="send-button" size="large" htmlType="submit">
          Send
        </Button>
      </div>
    </Form>
  );
};
