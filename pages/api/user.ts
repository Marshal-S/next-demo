import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '.';

type ResponseData<T = any> = {
    code: number;
    data?: T;
    message: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    const body = req.body;
    if (req.method === 'POST') {
        const user = await prisma.user.create({
            data: {
                name: body.name,
                email: body.email,
            },
        });
        res.status(200).json({ code: 200, data: user, message: 'ok' });
    } else if (req.method === 'GET') {
        const count = await prisma.user.count();
        res.status(200).json({ code: 200, data: count, message: 'ok' });
    }
    //错误访问直接不给响应即可
}
