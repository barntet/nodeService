FROM node:14.15.4-slim

WORKDIR /usr/app/00-static
COPY . .
RUN npm i

EXPOSE 9000
CMD npm run start