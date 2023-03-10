FROM node:18 AS builder

WORKDIR /home/Azure.Wms.Api

COPY package*.json ./
COPY tsconfig.json ./
COPY tsconfig.build.json ./

RUN yarn

COPY . .

RUN yarn build

FROM node:18 AS runner

WORKDIR /home/Azure.Wms.Api

COPY --from=builder /home/Azure.Wms.Api .

EXPOSE 80

CMD [ "yarn", "start" ]
