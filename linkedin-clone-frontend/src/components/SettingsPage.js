import React from 'react';
import { Form, Input, Button } from 'antd';

const SettingsPage = () => {
  const handleSubmit = (values) => {
    console.log('Settings:', values);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">Settings</h1>
      <Form layout="vertical" onFinish={handleSubmit} className="max-w-lg mx-auto">
        <Form.Item label="Username" name="username" required>
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email" required>
          <Input type="email" />
        </Form.Item>
        <Form.Item label="Password" name="password" required>
          <Input type="password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full">Save Changes</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SettingsPage;
