FROM node:12

ENV ACCEPT_HIGHCHARTS_LICENSE="YES"
ENV HIGHCHARTS_USE_MAPS=="NO"
ENV HIGHCHARTS_USE_GANTT="NO"
ENV PHANTOMJS_PLATFORM "linux"
ENV PHANTOMJS_ARCH "x64"
ENV OPENSSL_CONF=/etc/ssl

RUN npm install highcharts-export-server --unsafe-perm

# RUN npm i phantomjs-prebuilt 


# WORKDIR /usr/share/fonts/truetype
# ADD fonts/OpenSans-Regular.ttf OpenSans-Regular.ttf
# ADD fonts/OpenSans-Light.ttf OpenSans-Light.ttf
# ADD fonts/OpenSans-Semibold.ttf OpenSans-Semibold.ttf
# ADD fonts/OpenSans-Bold.ttf OpenSans-Bold.ttf
# ADD fonts/OpenSans-ExtraBold.ttf OpenSans-ExtraBold.ttf
# ADD fonts/OpenSans-Italic.ttf OpenSans-Italic.ttf
# ADD fonts/OpenSans-LightItalic.ttf OpenSans-LightItalic.ttf
# ADD fonts/OpenSans-BoldItalic.ttf OpenSans-BoldItalic.ttf
# ADD fonts/OpenSans-SemiboldItalic.ttf OpenSans-SemiboldItalic.ttf
# ADD fonts/OpenSans-ExtraBoldItalic.ttf OpenSans-ExtraBoldItalic.ttf
# WORKDIR /

COPY . .

EXPOSE 8099
ENTRYPOINT ["node", "index.js"]