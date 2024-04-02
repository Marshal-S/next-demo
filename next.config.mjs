/** @type {import('next').NextConfig} */
//ts版本文件，被声明为mjs
import path from 'path';
import { fileURLToPath } from 'url';
const __dirnameNew = path.dirname(fileURLToPath(import.meta.url));

const baseUrl = '';

const nextConfig = {
    sassOptions: {
        // includePaths: [path.join(__dirname, 'styles')], //我这里是不行哈
        includePaths: [path.join(__dirnameNew, 'styles')],
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'www.baidu.com',
            },
        ],
    },
    rewrites() {
        return [
            // 当请求路径符合 /api 时，将请求转发到代理服务器
            {
                source: '/api/:path*', //':path*'通配符
                destination: `${baseUrl}/api/:path*`,
            },
        ];
    },
    redirects() {
        return [
            {
                source: '/other', //默认地址
                destination: '/other/about', //重定向地址
                permanent: true,
            },
            // {
            //   source: '/',
            //   destination: '/login',
            //   permanent: true,
            // },
            {
                source: '/home/:slug', //:slug不写也是一样，替换指定路由
                destination: '/other/:slug',
                permanent: true,
            },
        ];
    },
    reactStrictMode: false, //去掉严格模式，例如 antd这个模式导入使用就会报红，但不影响使用
    typescript: {
        // !! WARN !!，自己、队友、三方插件写的ts有问题，必要时可以用这个，但是不推荐
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
