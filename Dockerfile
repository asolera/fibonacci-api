FROM mhart/alpine-node:slim-12

LABEL maintainer="Andrew Solera (andrewsolera@gmail.com)"

WORKDIR /app

COPY . .

EXPOSE 3000

CMD [ "node", "app.js" ]