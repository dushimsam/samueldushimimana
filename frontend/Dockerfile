# FROM node:alpine

# WORKDIR /app

# COPY package.json ./app

# COPY package-lock.json ./app

# # COPY ./ ./

# # Add bash
# RUN apk add --no-cache bash

# RUN chmod +x ./env.sh

# CMD ["npm", "start"]

FROM node

WORKDIR /app

COPY package*.json /app/
RUN yarn install

COPY . /app/

EXPOSE 3000
CMD [ "yarn", "build"]


