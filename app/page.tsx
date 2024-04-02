'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button, Checkbox, DatePicker, Form, Input } from 'antd';
import { useRouterWithOptions } from '../utils/navigate';

export default function App() {
    const router = useRouter();
    const newRouter = useRouterWithOptions();

    return (
        <div
            style={{ width: '100%', height: '100%', backgroundColor: 'white' }}
        >
            <div
                onClick={() => {
                    router.push('/home');
                }}
            >
                进入首页
            </div>
            <div
                onClick={() => {
                    router.push('/mine');
                }}
            >
                进入我的
            </div>
            <div
                onClick={() => {
                    router.push('/other');
                }}
            >
                进入other重定向到other/about
            </div>
            <div
                onClick={() => {
                    router.push('/home/about');
                }}
            >
                进入home/about重定向到other/about
            </div>
            <Link href="/other/about">link-other-about</Link>
            <div
                onClick={() => {
                    newRouter.push('/mine', {
                        id: '123',
                        name: '啦啦啦',
                    });
                }}
            >
                带着query参数进入我的
            </div>
            <div
                onClick={() => {
                    newRouter.push('/article', {
                        id: '111',
                    });
                }}
            >
                带着query参数进入Article SSR
            </div>
            <div
                onClick={() => {
                    newRouter.push('/article', {
                        id: '111',
                    });
                }}
            >
                带着query参数进入Article SSG
            </div>
            <div
                onClick={() => {
                    newRouter.push('/article', ['111']);
                }}
            >
                带着query参数进入articles SSG + paths
            </div>
            <div
                onClick={() => {
                    router.push('/login');
                }}
            >
                进入 app-login
            </div>
            <div
                onClick={() => {
                    router.push('/dashboard/home');
                }}
            >
                进入app-dasboard侧边栏某页面
            </div>

            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{ offset: 8, span: 16 }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            <DatePicker />
        </div>
    );
}
