# 使用官方的 Deno 镜像
FROM denoland/deno:alpine-1.29.0

# 设置工作目录
WORKDIR /app

# 将项目文件复制到容器中
COPY . .

# 安装依赖并运行项目
RUN deno install && deno run -A deno.ts

# 暴露容器的端口，设置为 4399
EXPOSE 4399

# 运行应用程序
CMD ["deno", "run", "-A", "deno.ts"]
