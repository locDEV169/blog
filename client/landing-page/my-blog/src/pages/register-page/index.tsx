/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/alt-text */
import { default as Button } from 'antd/es/button';
import 'antd/es/button/style/index.css';
import { default as Form } from 'antd/es/form';
import 'antd/es/form/style/index.css';
import { default as Input } from 'antd/es/input';
import 'antd/es/input/style/index.css';
import LoginGooglePage from 'components/auth/login.component';
import React from "react";

interface User {
    email?: string
    password?: string
}

export default function RegisterPage() {

    const onFinish = (values: User) => {
       console.log(values)
    };

    return (
        <div id="__next">
            <div>
                <div className="form">
                    <div className="form-header">
                        <a href="/">
                            <img src="https://vietcetera.com/images/header/logo-text.svg" alt="Vietcetera" width="100%" height="auto" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="form-account login-page">
                <h1 style={{ fontWeight: '100', marginBottom: '12px' }}>Đăng Ký</h1>
                <p className="text-body-2-light">Nhập email của bạn để đăng nhập tài khoản.</p>
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
                                    message: 'Please input your Username!',
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
                                    message: 'Please input your Password!',
                                },
                            ]}

                        >
                            <Input.Password
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>

                        <Form.Item className='login-button-form'>
                            <a href="">Quên Mật Khẩu</a>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Đăng Nhập
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                {/*  */}
                <div className=''>
                    <LoginGooglePage />
                </div>
                {/* Link đăng ký */}
                <div className="form-span author justify-content-center">
                    <div>
                        <span className="text-body-2">
                            Bạn chưa có tài khoản?
                        </span>
                        <span className="secondary left">
                            Đăng ký
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

