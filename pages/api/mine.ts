import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData<T = any> = {
	code: number
	data?: T
	message: string
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>
) {
	console.log(req.query, req.cookies, req.method, req.body)
	res.status(200).json({ code: 200, message: 'mine接口访问成功了！' })
	// res.redirect('/') //重定向到另一个url
	// res.redirect(307, '/') //可以设置重定向状态status
}

//指定配置选项
export const config = {
	api: {
		bodyParser: {
			sizeLimit: '1mb', //设置请求体body大小
		},
		responseLimit: '8mb', //默认4mb
		// responseLimit: false, //关闭限制
	},
	// Specifies the maximum allowed duration for this function to execute (in seconds)
	maxDuration: 5,
}