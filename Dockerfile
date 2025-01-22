# 使用 Node.js 官方镜像，确保版本 >= 22.6
FROM node:22.6

# 设置工作目录
WORKDIR /app

# 复制项目文件到工作目录
COPY . .

# 安装依赖
RUN npm install

# 暴露容器端口
EXPOSE 4399

# 运行 TypeScript 文件，支持 --experimental-strip-types
CMD ["node", "--experimental-strip-types", "node.ts"]
