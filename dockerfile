FROM node:12-alpine

LABEL author="psalguerodev"

WORKDIR /application

COPY package.json .

RUN npm install --quiet

COPY . .

EXPOSE 3000 3001 3002

ENTRYPOINT [ "npm", "start" ]

