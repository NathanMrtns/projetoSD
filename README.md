
# Dockerizando o servidor

## Cria as imagens e tags
1. $ docker build -t nome_imagem:tag_imagem .
2. $ docker tag nome_imagem:tag_imagem dockerID/nome_repositorio:version

## Loga no docker hub com tuas credenciais
3. $ docker login
4. $ docker push dockerID/nome_repositorio:version


# Criando cluster no gcloud

## Criar o cluster
1. gcloud container clusters create nome_do_cluster --num-nodes 3

## Autenticar no cluster
2. gcloud container clusters get-credentials nome_do_cluster

## Listar nodes
kubectl get nodes

# Criar um serviço
kubectl apply -f service.yaml

### Recuperar ip
kubectl get svc name_of_service

# Deploy
kubectl apply -f blue.yaml

# Setar autoscale
kubectl autoscale deployment nome_do_deployment --cpu-percent=50 --min=1 --max=10

## listar autoscaler
kubectl get hpa

## listar pods
kubectl get pod
