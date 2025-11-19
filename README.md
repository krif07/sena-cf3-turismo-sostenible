# Documentación del Proyecto

## Tabla de Contenidos
- [Introducción](#introducción)
- [Instalación](#instalación)
- [Uso](#uso)
- [Construcción para Producción](#construcción-para-producción)
- [Análisis y Corrección de Errores (Linting)](#análisis-y-corrección-de-errores-linting)

## Introducción
Este proyecto es una aplicación desarrollada con Vue.js, diseñada para ofrecer actividades interactivas y recursos educativos relacionados con el turismo sostenible y las comunidades étnicas.

## Instalación

Para configurar el proyecto en tu entorno local, sigue estos pasos.

### Prerrequisitos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (se recomienda la versión LTS) y [npm](https://www.npmjs.com/) (que viene incluido con Node.js).

### Pasos de Instalación

1.  Clona el repositorio:
    \`\`\`bash
    git clone <URL_DEL_REPOSITORIO>
    cd sena-cf2-turismo-sostenible
    \`\`\`
2.  Instala las dependencias del proyecto:
    \`\`\`bash
    npm install
    \`\`\`

## Uso

Para iniciar la aplicación en modo de desarrollo con un servidor local:

\`\`\`bash
npm run serve
\`\`\`

Esto iniciará la aplicación en \`http://localhost:8080\` (o un puerto similar) y la recargará automáticamente al detectar cambios en el código.

## Construcción para Producción

Para compilar la aplicación para su despliegue en producción:

\`\`\`bash
npm run build
\`\`\`

Este comando generará los archivos de producción optimizados en el directorio \`dist/\`.

## Análisis y Corrección de Errores (Linting)

Para verificar y corregir automáticamente los problemas de linting y formato de código (usando ESLint y Prettier):

\`\`\`bash
npm run lint -- --fix
\`\`\`

Este comando analizará los archivos del proyecto y aplicará las correcciones automáticas de formato cuando sea posible.
