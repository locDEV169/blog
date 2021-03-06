/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/alt-text */
import { default as Button } from "antd/es/button";
import "antd/es/button/style/index.css";
import { default as Form } from "antd/es/form";
import "antd/es/form/style/index.css";
import { default as Input } from "antd/es/input";
import "antd/es/input/style/index.css";
import LoginGooglePage from "components/auth/login.component";
import api from "constants/api";
import React from "react";
import { default as message } from "antd/es/message";

interface User {
  email?: string;
  password?: string;
}
interface ErrorType {
  response: {
    status?: number;
    data: {
      msg: string;
      message?: string;
    };
  };
}

export default function RegisterPage() {
  const onFinish = (values: User) => {
    api
      .post("register", { account: values.email, password: values.password })
      .then((res) => {
        message.success("Register Successful");
        window.location.href = "/login";
      })
      .catch((errors: ErrorType) => handlerError(errors));
  };
  const handlerError = (err: ErrorType) => {
    const status = err.response?.status;
    switch (status) {
      case 400:
        message.error(err.response.data.msg);
        break;
      case 401:
        message.error(err.response.data.message);
        break;
      case 500:
        message.error(err.response.data.message);
        break;
      default:
        message.error("Request Login Failed");
    }
  };

  return (
    <div id="__next">
      <div>
        <div className="form">
          <div className="form-header">
            <a href="/">
              <img
                src="https://vietcetera.com/images/header/logo-text.svg"
                alt="Vietcetera"
                width="100%"
                height="auto"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="form-account login-page">
        <h1 style={{ fontWeight: "100", marginBottom: "12px" }}>????ng K??</h1>
        <p className="text-body-2-light">Nh???p email c???a b???n ????? k?? t??i kho???n.</p>
        <div className="account-grid mb-input">
          <Form
            name="normal_login"
            className="login-form .jss62"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input.Password type="password" placeholder="Password" />
            </Form.Item>

            <Form.Item className="login-button-form">
              <a href="">Qu??n M???t Kh???u</a>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                ????ng Nh???p
              </Button>
            </Form.Item>
          </Form>
        </div>
        {/*  */}
        <div className="">
          <LoginGooglePage />
        </div>
        {/* Link ????ng k?? */}
        <div className="form-span author justify-content-center">
          <div>
            <span className="text-body-2">B???n ch??a c?? t??i kho???n?</span>
            <span className="secondary left">????ng k??</span>
          </div>
        </div>
      </div>
    </div>
  );
}
