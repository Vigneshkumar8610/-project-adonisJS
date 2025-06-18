FROM public.ecr.aws/docker/library/node:20.12.2
WORKDIR /app
COPY . /app
RUN apt update -y
RUn apt install chromium -y
RUN npm install
RUN npm install xlsx
RUN npm install puppeteer
RUN npm install node-cron
RUN npm run build
CMD ["npm", "run", "dev"]
