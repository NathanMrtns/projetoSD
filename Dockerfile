FROM node:boron

#Diretorio que o apicativo vai rodar
WORKDIR /usr/src/app

#Copia o arquivo de dependencias pro workdir
COPY package.json .

#Instala os paranaue
RUN npm install

#Copia o aplicaticativo pro workdir
COPY main.js .

#Abre a porta 8080
EXPOSE 8080

#Roda o comando de start do package.json
CMD [ "npm", "start" ]
