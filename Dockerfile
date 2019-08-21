FROM node
RUN mkdir -p /home/Service
WORKDIR /home/Service
COPY . /home/Service
RUN npm install && npm test && npm run lint
CMD 
