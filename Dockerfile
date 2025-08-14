FROM rust:1-bullseye as ccbuilder

RUN apt-get update && apt-get upgrade -y

WORKDIR /ccompiler
COPY ./ccompiler/ .

RUN cargo build --release

FROM node:22

WORKDIR /cc-vizualiser
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

COPY --from=ccbuilder /ccompiler/target/release/compiler compiler

ENV NODE_ENV=production

EXPOSE 3000
CMD ["npm", "start"]