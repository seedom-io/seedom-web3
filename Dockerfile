FROM nginx

# Declare constants
ENV NVM_VERSION v0.33.8
ENV NODE_VERSION v8.6.0

# Install pre-reqs
RUN apt-get update
RUN apt-get -y install curl build-essential git python

# Replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh
# Install NVM
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/${NVM_VERSION}/install.sh | bash
# Install NODE
RUN source ~/.nvm/nvm.sh; \
    nvm install $NODE_VERSION; \
    nvm alias default $NODE_VERSION; \
    nvm use default;

# Clone solidity project
RUN git clone https://github.com/seedom-io/seedom-solidity.git /solidity

# Prepare for web3 build
COPY . /usr/share/nginx/html
WORKDIR /usr/share/nginx/html

# Build web3
RUN rm -rf node_modules; \
    source ~/.nvm/nvm.sh; \
    npm install; \
    npm run ropsten;

# Set up NGINX
COPY nginx.conf /etc/nginx/conf.d/default.conf
