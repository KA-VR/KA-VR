FROM node

# Create app directory
RUN mkdir -p /usr/src/server
WORKDIR /usr/src/server

# Install app dependencies
COPY package.json /usr/src/server/
RUN npm install

# Bundle app source
COPY . /usr/src/server
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start:production"]