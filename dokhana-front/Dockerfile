FROM node AS build
RUN mkdir -p /usr/src/app/frontend3
WORKDIR /usr/src/app/frontend3
COPY package-lock.json /usr/src/app/frontend3
COPY package.json /usr/src/app/frontend3
RUN npm install
COPY . /usr/src/app/frontend3
RUN npm install react react-dom --save 
RUN npm run build
EXPOSE 4200
RUN npm install -g serve
RUN serve -s build
CMD npm start
