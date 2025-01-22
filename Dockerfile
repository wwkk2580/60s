# 使用精简的 Node.js Alpine 镜像
FROM node:20-alpine

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 并安装依赖
COPY package*.json ./
RUN npm install --only=production && npm cache clean --force

# 复制项目文件到工作目录
COPY . .

# 暴露容器端口
EXPOSE 4399

# 运行 TypeScript 文件
CMD ["npx", "ts-node", "node.ts"]
