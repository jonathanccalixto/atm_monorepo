FROM node:14-alpine

ARG YARN_VERSION 1.22.10

RUN apk add --no-cache --virtual .build-deps-yarn curl gnupg tar \
  && for key in \
    6A010C5166006599AA17F08146C2130DFD2497F5 \
  ; do \
    gpg --batch --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys "$key" || \
    gpg --batch --keyserver hkp://ipv4.pool.sks-keyservers.net --recv-keys "$key" || \
    gpg --batch --keyserver hkp://pgp.mit.edu:80 --recv-keys "$key" ; \
  done \
  && curl -fsSLO --compressed "https://yarnpkg.com/downloads/$YARN_VERSION/yarn-v$YARN_VERSION.tar.gz" \
  && curl -fsSLO --compressed "https://yarnpkg.com/downloads/$YARN_VERSION/yarn-v$YARN_VERSION.tar.gz.asc" \
  && gpg --batch --verify yarn-v$YARN_VERSION.tar.gz.asc yarn-v$YARN_VERSION.tar.gz \
  && mkdir -p /opt \
  && rm -rf /opt/yarn* /usr/local/bin/yarn*\
  && tar -xzf yarn-v$YARN_VERSION.tar.gz -C /opt/ \
  && ln -s /opt/yarn-v$YARN_VERSION/bin/yarn /usr/local/bin/yarn \
  && ln -s /opt/yarn-v$YARN_VERSION/bin/yarnpkg /usr/local/bin/yarnpkg \
  && rm yarn-v$YARN_VERSION.tar.gz.asc yarn-v$YARN_VERSION.tar.gz \
  && apk del .build-deps-yarn \
  # smoke test
  && yarn --version \
  # upgrade yarn and npm
  && npm install -g npm@latest \
  # Creates build folder in node` home
  && mkdir -p /home/node/app

# Changes default folder owner
WORKDIR /home/node/app

# Changes folder owner to node
RUN chown -R node:node /home/node/app

# Copies the main project to app folder
COPY package.json /home/node/app/package.json
COPY yarn.lock /home/node/app/yarn.lock

# Changes files owner
RUN chown -R node:node /home/node/app

# swaps root user to node user
USER node

# Makes access to project libraries executables globa
ENV PATH /home/node/app/node_modules/.bin:$PATH
# env var needed to start with docker
ENV CI true

# Installs packages
RUN yarn install

# Exposes app port
EXPOSE 3000
