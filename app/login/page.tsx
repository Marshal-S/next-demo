'use client'
import { useRouter } from "next/navigation"
import { useEffect } from "react"

//这个和其他页面都会传入layout，当其子页面
export default function Login(props: any) {
	const router = useRouter()

	useEffect(() => {
	}, [])

	return (
		<div>
			我是Login页面
		</div>
	)
}