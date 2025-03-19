# SwiftZone - Agencia de Marketing y Desarrollo

Sitio web corporativo para SwiftZone, una agencia especializada en marketing digital y desarrollo de software a medida.

![SwiftZone Logo](public/logo.png)

## Tecnologías Utilizadas

- **Frontend**: Next.js 15.x, React 18.x, TailwindCSS
- **Idiomas**: Soporte multilingüe (Español/Inglés)
- **Estilo**: Shadcn/UI, Motion Framer para animaciones
- **Contenedor**: Docker y Docker Compose

## Requisitos Previos

- [Docker](https://docs.docker.com/get-docker/) y [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/) 18.x o superior (solo para desarrollo)
- [Bun](https://bun.sh/) 1.x o superior (solo para desarrollo)

## Despliegue en Producción

### Usando Docker Compose (Recomendado)

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tuorganizacion/swiftzone.git
   cd swiftzone
   ```

2. Configura las variables de entorno (opcional):
   ```bash
   cp .env.example .env
   # Edita el archivo .env según tus necesidades
   ```

3. Inicia los contenedores:
   ```bash
   docker-compose up -d
   ```

4. La aplicación estará disponible en `http://localhost:3000`

### Usando Docker (Despliegue manual)

1. Construye la imagen:
   ```bash
   docker build -t swiftzone:latest .
   ```

2. Ejecuta el contenedor:
   ```bash
   docker run -d -p 3000:3000 --name swiftzone-app swiftzone:latest
   ```

3. La aplicación estará disponible en `http://localhost:3000`

## Configurando Nginx como Proxy Inverso

Si deseas utilizar Nginx como proxy inverso (recomendado para producción):

1. Asegúrate de tener el directorio `nginx/ssl` con tus certificados SSL:
   ```bash
   mkdir -p nginx/ssl
   # Coloca tus certificados SSL en la carpeta nginx/ssl
   ```

2. Edita el archivo `docker-compose.yml` y descomenta la sección de Nginx

3. Ejecuta Docker Compose:
   ```bash
   docker-compose up -d
   ```

4. El sitio estará disponible en:
   - HTTP: `http://localhost:80`
   - HTTPS: `https://localhost:443` (si has configurado SSL)

## Desarrollo Local

1. Instala las dependencias:
   ```bash
   bun install
   ```

2. Inicia el servidor de desarrollo:
   ```bash
   bun run dev
   ```

3. La aplicación estará disponible en `http://localhost:3000`

## Comandos Disponibles

- `bun run dev`: Inicia el entorno de desarrollo
- `bun run build`: Construye la aplicación para producción
- `bun run start`: Inicia la aplicación en modo producción
- `bun run lint`: Ejecuta el linter
- `docker-compose up -d`: Inicia todos los contenedores en modo detached
- `docker-compose down`: Detiene y elimina los contenedores
- `docker-compose logs -f`: Muestra los logs en tiempo real

## Mantenimiento

### Actualización

Para actualizar la aplicación:

```bash
git pull
docker-compose build --no-cache
docker-compose up -d
```

### Copia de Seguridad (si usas base de datos)

```bash
docker-compose exec database pg_dump -U postgres_user swiftzone > backup.sql
```

## Personalización

- Modifica los archivos en `src/` para cambiar la funcionalidad
- Ajusta los estilos en `src/app/globals.css` o en los componentes individuales

## Licencia

© 2025 SwiftZone. Todos los derechos reservados.
