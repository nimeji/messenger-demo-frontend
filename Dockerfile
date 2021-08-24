# build environment
FROM node:14.7-alpine as build
WORKDIR /app
ARG HASHED_NAMES_URL
ARG ENCODE_URL
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json yarn.lock ./
RUN apk add --no-cache --virtual .gyp \
        py-pip \
        make \
        g++ \
    && yarn \
    && apk del .gyp
COPY . ./
ENV REACT_APP_API_HASHED_NAMES=$HASHED_NAMES_URL
ENV REACT_APP_API_ENCODE=$ENCODE_URL
ENV REACT_APP_NUM_HASHES=100
RUN yarn build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]