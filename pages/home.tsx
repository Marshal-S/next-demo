'use client';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

//CSR客户端渲染
//使用 useEffect 代替 getServerSideProps、getStaticProps 即可
//浏览器会下载最小的html和js，然后用于客户端执行和渲染
//由于不是服务端获取数据，刚进来时，可能需要先显示loading（当然不显示直接展示空白也行）

export default function Home(props: any) {
    const router = useRouter();
    console.log('props', props);

    return (
        <>
            <Head>
                <title>home子标题akjsdhkfashkfahsdkjfhaskdjfhkasjd</title>
            </Head>
            <div className="home-bkg">
                <div>我是home页面: 参数是{props.router}</div>
                <div
                    onClick={() => {
                        router.push('/');
                    }}
                >
                    返回app
                </div>
            </div>
        </>
    );
}

//这是一个遗留的异步函数，官方推荐使用getServerSideProps、getStaticProps代替它，都存在是都会执行
//其既可以在客户端运行也可以在服务端运行，服务端渲染时其在服务端执行，客户端跳转页面时，在客户端执行
// Home.getInitialProps = async (ctx: NextPageContext) => {
//     const res = await fetch('https://api.github.com/repos/vercel/next.js');
//     const json = await res.json();
//     return { stars: json.stargazers_count };
// };
