FROM node:16.14.2-alpine AS NPM_TOOL_CHAIN

WORKDIR /usr/app

ENV PATH /usr/app/node_modules/.bin:$PATH

COPY . .
RUN yarn --immutable

RUN yarn build

FROM nginx:alpine

ENV NGINX_PORT 5000
EXPOSE ${NGINX_PORT}

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=NPM_TOOL_CHAIN /usr/app/dist /usr/share/nginx/html

CMD sed -i "s/listen  .*/listen ${NGINX_PORT};/g" "/etc/nginx/conf.d/default.conf" && exec nginx -g 'daemon off;'