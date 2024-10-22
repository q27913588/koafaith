# 使用官方的 Node.js 映像作為基礎映像
FROM node:20-alpine AS build-stage

# 設置工作目錄
WORKDIR /app

# 複製 package.json 和 package-lock.json
COPY package*.json ./

# 安裝依賴
RUN npm install

# 複製本地構建好的文件到工作目錄
COPY .nuxt ./
COPY .output ./.output
COPY nuxt.config.ts ./
COPY public ./

# 暴露應用運行的端口
EXPOSE 3000

# 設置環境變量
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

# 啟動 Nuxt.js 應用

CMD [ "npm", "run", "start" ]