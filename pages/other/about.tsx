'use client'
import { useRouter } from "next/navigation"
import ComponentA from "./componenta"

export default function About(props: any) {
	const router = useRouter()

	return (
		<div>
			<div>我是about页面: 参数是{props.router}</div>
			<div onClick={() => {
				router.push('/home')
			}}>进入首页</div>
			<div onClick={() => {
				router.push('/mine')
			}}>进入我的</div>
			<div onClick={() => {
				router.push('contact')
			}}>进入contact</div>
			<div onClick={() => {
				router.replace('/')
			}}>返回app</div>
			<ComponentA />
		</div>
	)
}