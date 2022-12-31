FROM node:16.14.2-alpine AS NPM_TOOL_CHAIN

WORKDIR /app

COPY . .

RUN yarn --immutable

RUN yarn build


FROM nginx:alpine

COPY --from=NPM_TOOL_CHAIN /app/dist /var/www/camping-lavandes.com
