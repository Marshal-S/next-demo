'use client'
import { useRouter } from "next/navigation"

export default function Contact(props: any) {
	const router = useRouter()

	return (
		<div>
			<div>我是Contact页面: 参数是{props.router}</div>
			<div onClick={() => {
				router.push('/home')
			}}>进入首页</div>
			<div onClick={() => {
				router.push('/mine')
			}}>进入我的</div>
			<div onClick={() => {
				router.push('about')
			}}>进入about</div>
			<div onClick={() => {
				router.replace('/')
			}}>返回app</div>
		</div>
	)
}