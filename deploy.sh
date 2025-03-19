#!/bin/bash

# Script de despliegue para SwiftZone
# Uso: ./deploy.sh [dev|prod]

# Colores para la salida
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # Sin Color

# Comprobación de Docker
if ! command -v docker &> /dev/null; then
    echo -e "${RED}Error: Docker no está instalado.${NC}"
    echo "Por favor, instala Docker siguiendo las instrucciones en: https://docs.docker.com/get-docker/"
    exit 1
fi

# Comprobación de Docker Compose
if ! command -v docker-compose &> /dev/null; then
    echo -e "${RED}Error: Docker Compose no está instalado.${NC}"
    echo "Por favor, instala Docker Compose siguiendo las instrucciones en: https://docs.docker.com/compose/install/"
    exit 1
fi

# Función para el despliegue en entorno de desarrollo
deploy_dev() {
    echo -e "${GREEN}Iniciando despliegue en entorno de desarrollo...${NC}"

    echo -e "${YELLOW}Deteniendo contenedores existentes...${NC}"
    docker-compose down

    echo -e "${YELLOW}Construyendo imágenes...${NC}"
    docker-compose build

    echo -e "${YELLOW}Iniciando contenedores...${NC}"
    docker-compose up -d

    echo -e "${GREEN}Despliegue completado.${NC}"
    echo "La aplicación está disponible en: http://localhost:3000"
}

# Función para el despliegue en entorno de producción
deploy_prod() {
    echo -e "${GREEN}Iniciando despliegue en entorno de producción...${NC}"

    # Verificar si existe el archivo .env
    if [ ! -f .env ]; then
        echo -e "${YELLOW}El archivo .env no existe. Creando a partir de .env.example...${NC}"
        cp .env.example .env
        echo -e "${YELLOW}⚠️ Por favor, edita el archivo .env con tus configuraciones antes de continuar.${NC}"
        exit 1
    fi

    echo -e "${YELLOW}Deteniendo contenedores existentes...${NC}"
    docker-compose down

    echo -e "${YELLOW}Construyendo imágenes sin caché...${NC}"
    docker-compose build --no-cache

    echo -e "${YELLOW}Iniciando contenedores...${NC}"
    docker-compose up -d

    echo -e "${GREEN}Despliegue completado.${NC}"
    echo "La aplicación está disponible en: http://localhost:3000"

    # Verificar si Nginx está habilitado
    if grep -q "nginx:" docker-compose.yml && ! grep -q "#.*nginx:" docker-compose.yml; then
        echo "También puedes acceder a través de Nginx en: http://localhost:80"
    fi
}

# Función para mostrar ayuda
show_help() {
    echo "Uso: $0 [dev|prod]"
    echo ""
    echo "Opciones:"
    echo "  dev   - Despliegue en entorno de desarrollo"
    echo "  prod  - Despliegue en entorno de producción"
    echo "  help  - Muestra esta ayuda"
    echo ""
}

# Procesamiento de argumentos
case "$1" in
    dev)
        deploy_dev
        ;;
    prod)
        deploy_prod
        ;;
    help)
        show_help
        ;;
    *)
        echo -e "${YELLOW}No se especificó un entorno válido.${NC}"
        show_help
        exit 1
        ;;
esac

exit 0
