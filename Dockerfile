FROM nginx:mainline as helloquiz
WORKDIR /usr/share/nginx/html
COPY ./index.html .
COPY ./images ./images
COPY ./node_modules/react ./node_modules/react
COPY ./node_modules/react-dom ./node_modules/react-dom
COPY ./dist ./dist
