'use server';

import { PrismaClient } from '@prisma/client';

//初始化全局使用这个变量
export const prisma = new PrismaClient();
