# 使用官方 Deno 镜像
FROM denoland/deno:alpine

# 设置工作目录
WORKDIR /app

# 复制项目文件
COPY . .

# 安装 Deno 脚本
RUN deno install --global --allow-read --allow-net -n deno-app deno.ts

# 暴露 4399 端口
EXPOSE 4399

# 使用已安装的命令执行
CMD ["deno-app"]
