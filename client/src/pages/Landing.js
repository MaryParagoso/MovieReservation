import React from "react";
import { Layout, Breadcrumb, Button } from "antd";
import {
  contentStyle,
  centerContent,
  Context1,
  Context2,
  breadcrumbStyle,
  buttonLogin,
  buttonSignup,
} from "../stylesheets/layout";

const { Content } = Layout;

function Landing() {
  return (
    <div>
      <Layout>
        <Content style={contentStyle}>
          <Breadcrumb style={breadcrumbStyle}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div style={centerContent}>
            <h1 style={Context1}>Welcome to Our Website</h1>
            <p style={Context2}>Explore amazing content and more!!</p>
            <div>
              <Button ghost size="large" style={buttonLogin}>
                Log In
              </Button>
              <Button
                type="primary"
                size="large"
                htmlType="submit"
                style={buttonSignup}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default Landing;
