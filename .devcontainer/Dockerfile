ARG VARIANT=14
FROM mcr.microsoft.com/azure-functions/node:4-node${VARIANT}-core-tools

RUN su node -c "npm install -g @angular/cli@13.3.0"

RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add \
  && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
  && apt-get update && apt-get install -y google-chrome-stable
