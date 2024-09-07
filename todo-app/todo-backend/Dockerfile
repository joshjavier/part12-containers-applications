FROM node:lts-bookworm-slim
ENV NODE_ENV=production DEBUG=playground:*
WORKDIR /usr/src/app
COPY --chown=node:node . .
RUN npm ci
CMD [ "npm", "start" ]
