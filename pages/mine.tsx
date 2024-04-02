'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function Mine(props: any) {
    const params = useSearchParams();
    const router = useRouter();

    const getKeysValues = () => {
        if (!params) return;
        let content = '';
        //遍历params
        params.forEach((value, key) => {
            console.log(key, value);
            if (content) {
                content += '；' + key + ':' + value;
            } else {
                content += key + ':' + value;
            }
        });
        console.log(params.get('id')); //获取单个
        return content;
    };

    return (
        <div>
            <div>我是mine页面: 参数是{props.router}</div>
            <div
                onClick={() => {
                    router.push('/');
                }}
            >
                返回app
            </div>
            <div>query参数为：{getKeysValues()}</div>
        </div>
    );
}
