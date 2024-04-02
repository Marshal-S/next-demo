import { useRouter } from 'next/router';
import { useState } from 'react';

//静态生成所有可能的 path，构建时调用一次
export async function getStaticPaths() {
    const paths = ['111', '222', '123'].map((e) => ({
        params: {
            id: e,
        },
    }));
    return { paths, fallback: false };
}

//根据传递的id生成固定信息，构建时生成一次
export async function getStaticProps({ params }: { params: any }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const info = {
        id: params.id,
        name: '啦啦啦' + params.id,
    };

    // Pass post data to the page via props
    return { props: info };
}

//通过上面可以看出，这个页面模版构建时什么样子，整体架构基本就固定了，浏览器会缓存，下次速度就很快，感觉更适用于不同模版，访问量高，内容类型大体一致的页面()
//内容可以使用CSR动态请求，例如 hooks 请求数据内容
export default function Article2(props: any) {
    const router = useRouter();
    const [count, setCount] = useState(0);

    return (
        <div>
            <div>我是article页面</div>
            <div>
                id:{props.id} -- name:{props.name}
            </div>
            <div onClick={() => setCount(count + 1)}>count:{count}</div>
            <div
                onClick={() => {
                    router.push('/');
                }}
            >
                返回app
            </div>
        </div>
    );
}
