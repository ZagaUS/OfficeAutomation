FROM node:20.2.0-alpine3.16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm install -g @angular/cli

COPY . .
RUN ng build --configuration=production

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]
