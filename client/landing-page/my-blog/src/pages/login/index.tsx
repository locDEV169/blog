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
import { default as message } from 'antd/es/message'
import 'antd/es/message/style/index.css'
import LoginGooglePage from 'components/auth/login.component';
import React from "react";
import './style.scss'
import api from './../../constants/api';
import Cookies from 'js-cookie';

interface User {
    email?: string
    password?: string
}
interface ResponseLogin {
    data: {
        msg: string
        access_token: string
        user: {
            id: string
            name: string
            account: string
            role: string
            type: string
            avatar: string
            created_at: Date
            updated_at: Date
        }
    }
}
interface ErrorType {
    response: {
        status?: number;
        data: {
            msg: string;
            message?: string
        };
    };
}

export default function LoginPage() {

    const onFinish = (values: User) => {
        console.log('Received values of form: ', values);
        api.post("login", { account: values.email, password: values.password })
            .then((res: ResponseLogin) => {
                message.success("Login Successful");
                setCookie("accessToken", res.data?.access_token, parseJwt(res.data?.access_token));
                setCookie('user',JSON.stringify(res.data.user),parseJwt(res.data?.access_token))
                window.location.href = '/'
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
                message.error("Request Login Failed");
                break;
            default:
                message.error("Request Login Failed");
        }
    };

    function parseJwt(token: string) {
        var base64Url = token.split(".")[1];
        var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        var jsonPayload: any = decodeURIComponent(
            atob(base64)
                .split("")
                .map(function (c) {
                    return (
                        "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2)
                    );
                })
                .join("")
        );

        return JSON.parse(jsonPayload).exp;
    }

    const setCookie = (username: string, value: string, expires: number) => {
        const date = new Date();
        date.setTime(date.getTime() + expires);
        Cookies.set(username, value, { expires: date, path: "/" });
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
                <h1 style={{ fontWeight: '100', marginBottom: '12px' }}>Đăng nhập</h1>
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

