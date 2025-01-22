# 使用精简的 Node.js Alpine 镜像
FROM node:22.13-alpine AS builder

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 并安装依赖
COPY package*.json ./
RUN npm install && npm cache clean --force

# 复制项目文件并编译 TypeScript
COPY . .
RUN npx tsc

# 使用更小的基础镜像，仅复制运行所需文件
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/dist /app
COPY --from=builder /app/package*.json /app/

# 仅安装生产依赖
RUN npm install --only=production && npm cache clean --force

# 暴露容器端口
EXPOSE 4399

# 运行 JavaScript 文件
CMD ["node", "node.js"]
