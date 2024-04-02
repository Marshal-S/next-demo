import { useRouter } from 'next/router';

// //可以在pages这种页面使用，app里面不允许使用下面功能
// //SSR-服务端渲染（按请求按需渲染页面），页面每次请求都要从服务端给出渲染页面，适用于数据需要频繁更新的页面，这种实际上可以使用csr+请求代替，接口处理好就没事
// ///pages/article/detail  -- /pages/article/collects
// export async function getServerSideProps() {
// 	//这里在后端执行，每次请求页面都会执行，请求接口获取最新数据或者固定数据
//     return {
//         props: {
//             info: '我是动态获取到的信息',
//         },
//     };
// }

// 构建时行一次，SSG 静态生成，数据也固定了，不用每次请求，浏览器会缓存，适用于比较静态的页面(固定)
export async function getStaticProps() {
    const info = {
        id: '123123',
        name: '啦啦啦',
    };
    return { props: info };
}

export default function Article(props: any) {
    const router = useRouter();

    return (
        <div>
            <div>我是article页面</div>
            <div>SSR: {props.info}</div>
            <div>
                SSG: id:{props.id} -- name:{props.name}
            </div>
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
