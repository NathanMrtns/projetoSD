#Cria as imagens e tags
1. $ docker build -t nome_imagem:tag_imagem .
2. $ docker tag nome_imagem:tag_imagem dockerID/nome_repositorio:version

#Loga no docker hub com tuas credenciais
3. $ docker login 
4. $ docker push dockerID/nome_repositorio:version
