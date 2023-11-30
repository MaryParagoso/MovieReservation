import React from "react";
import { Button, Form, Input, Layout } from "antd";
import {
  design,
  sectionTitle,
  contentStyle,
  headerStyle,
  footerStyle,
  formStyle,
  inputStyle,
  formItem,
  buttonLogin,
  buttonSignup,
} from "../stylesheets/mainUI";

const { Header, Content, Footer } = Layout;

function Login() {
  return (
    <div>
      <Layout>
        <Content style={contentStyle}>
          <div style={design}>
            <Header style={headerStyle}>Movie Reservation System</Header>
            <Form style={formStyle}>
              <h1 style={sectionTitle}>Log In to Your Account</h1>
              <Form.Item
                style={formItem}
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input size="large" style={inputStyle} />
              </Form.Item>
              <Form.Item
                style={formItem}
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password size="large" style={inputStyle} />
              </Form.Item>
              <Form.Item style={{ display: "flex", justifyContent: "center" }}>
                <Button ghost size="large" style={buttonSignup}>
                  Sign Up
                </Button>
                <Button
                  type="primary"
                  size="large"
                  htmlType="submit"
                  style={buttonLogin}
                >
                  Log In
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Content>
        <Footer style={footerStyle}>
          Ant Design ©2023 Created by We Bare Bears
        </Footer>
      </Layout>
    </div>
  );
}

export default Login;
