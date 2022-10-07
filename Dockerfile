# Dockerfile
FROM node:14.16.0 as node

WORKDIR /app
COPY . .


# Add nginx config
# COPY ./docker/nginx/nginx.conf /temp/nginx.conf
# RUN envsubst /app < /temp/nginx.conf > /etc/nginx/conf.d/default.conf

RUN npm install
RUN npm run build --prod


FROM nginx:alpine
COPY --from=node /app/dist/site-loja-geral /usr/share/nginx/html/

# Add nginx config
COPY ./docker/nginx/nginx.conf /temp/nginx.conf
RUN envsubst /app < /temp/nginx.conf > /etc/nginx/conf.d/default.conf
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]
