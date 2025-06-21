FROM public.ecr.aws/docker/library/node:20.12.2
WORKDIR /app
COPY . /app
RUN apt update -y
RUN npm install
RUN npm run build
CMD ["npm", "run", "dev"]
