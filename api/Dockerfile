FROM ruby:3.0.1-alpine

# Add environments
ENV PATH=/home/backend/app/bin:$PATH
ENV RUBYOPT='-W:no-deprecated -W:no-experimental'

# Upgrade rubygems and dependencies
# AND Create the common user
RUN gem update --system\
 && gem install bundler\
 && gem cleanup\
 && apk add --no-cache\
        build-base\
        postgresql-dev\
        postgresql-client\
        tzdata\
 && addgroup --gid 1000 backend\
 && adduser -D -g "" -u 1000 -G backend backend\
 && mkdir -p /home/backend/app

# Define a entrypoint executable
COPY config/entrypoint.sh /usr/bin/entrypoint.sh
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["sh", "/usr/bin/entrypoint.sh"]

# Set as default folder
WORKDIR /home/backend/app

# Copy the Gemfile
COPY Gemfile* ./

# Changes default folder owner
RUN chown -R backend:backend /home/backend/app /usr/local/bundle

# Swap root user to backend user
USER backend

# Installs packages
RUN bundle install

# Exposes port
EXPOSE 3000