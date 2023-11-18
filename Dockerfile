FROM node:14-alpine3.16
WORKDIR /https://github.com/phillipvdh/Postgres-Project.git
COPY . .
RUN npm install
CMD [ "npm", "start" ]