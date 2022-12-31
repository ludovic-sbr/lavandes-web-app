FROM node:16.14.2-alpine AS NPM_TOOL_CHAIN

WORKDIR /usr/app

ENV PATH /usr/app/node_modules/.bin:$PATH

COPY . /usr/app/

RUN yarn --immutable

RUN yarn build

FROM nginx:alpine

COPY --from=NPM_TOOL_CHAIN /usr/app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]