# FHIR-Fhandango: A Node-Red FHIR Experiment

This source code is part of an experiment involving FHIR, Node-RED, MQTT, and IoT devices. You can view the internal document and its results in the provided [Markdown file](doc/fhir-iot_en.md). This project is pushed for educational purposes to collaborate and generate new ideas for using FHIR with other technologies.

This project contains a custom Node-RED setup with personalized nodes, designed for local environment execution, offering easy integration and testing for project-specific nodes. While this is an initial step and can be extended and deployed within the Node-RED contrib ecosystem, it's important to note that this code is not production-ready but rather a demonstration from which development can begin.

## Project Structure

```
fhandango/
│
├── fhandango-nodes/
│   ├── nodo1/
│   │   ├── nodo1.js
│   │   └── nodo1.html
│   ├── nodo2/
│   │   ├── nodo2.js
│   │   └── nodo2.html
│   └── ... 
│
├── package.json
├── README.md
└── LICENSE
│
├── doc/document.pdf
└── .node-red/           # Auto generated Node-RED user directory with configs for development
```


## Development Environment

To set up your development environment, ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed. Then, execute the following commands.

### Installation and Execution

To install and run this Node-RED project:

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start Node-RED on Windows or Linux:
   ```bash
   npm run start-linux
   ```

Note: The start-windows script hasn't been tested; if you try it, please provide feedback or seek assistance.

## Handheld methods

### Using `npm link` in a Local Node-RED Project

For local Node-RED instances, use `npm link` to symlink your custom nodes directly into the project's `node_modules` for real-time development and testing.

### Steps for Linking Custom Nodes

1. **Create a Global Symlink for Your Node**:
   - In your custom node's directory, run `npm link`.
   - This creates a global symlink for your node.

2. **Link Your Node into the Project's Node-RED**:
   - In your project's root directory, run:
     ```bash
     npm link node-red-contrib-your-node
     ```
   - Replace `node-red-contrib-your-node` with your node's package name.

3. **Start Node-RED from Your Project**:
   - Use a script from your `package.json` or run `node node_modules/node-red/red.js`.

4. **Unlink After Development**:
   - In your project directory, run:
     ```bash
     npm unlink node-red-contrib-your-node
     ```

### Setting Up Symbolic Links for the Project

Symlinks allow you to link custom Node-RED nodes from a development directory to the Node-RED user directory without file duplication.

#### Creating Symlinks

- **Linux**: Use `ln -s [TARGET] [LINK_NAME]`.
- **Windows**: Use Administrator Command Prompt and `mklink /D [LINK] [TARGET]`.

Symlinks ensure instant updates in Node-RED when changes are made, eliminating the need to copy files after each modification.



# FHIR-Fhandango: Un Experimento de Node-Red con FHIR

Este código fuente es parte de un experimento que involucra FHIR, Node-RED, MQTT y dispositivos IoT. Puedes ver el documento interno y sus resultados en el [documento](doc/fhir-iot.md). Este proyecto se publica con fines educativos para colaborar y generar nuevas ideas sobre el uso de FHIR con otras tecnologías.

Este proyecto contiene una configuración personalizada de Node-RED con nodos personalizados, diseñada para ejecución en entornos locales, ofreciendo una fácil integración y pruebas para nodos específicos del proyecto. Aunque este es un primer paso y puede extenderse y desplegarse dentro del ecosistema contrib de Node-RED, es importante señalar que este código no está listo para producción, sino que es más bien una demostración desde la cual se puede comenzar el desarrollo.

## Estructura del Proyecto

```
fhandango/
│
├── fhandango-nodes/
│   ├── nodo1/
│   │   ├── nodo1.js
│   │   └── nodo1.html
│   ├── nodo2/
│   │   ├── nodo2.js
│   │   └── nodo2.html
│   └── ... 
│
├── package.json
├── README.md
└── LICENSE
│
│
└── .node-red/           # Node-RED user directory foor development
```


## Entorno de Desarrollo

Para configurar tu entorno de desarrollo, asegúrate de tener instalados [Node.js](https://nodejs.org/es/) y [npm](https://www.npmjs.com/). Luego, ejecuta los siguientes comandos.

### Instalación y Ejecución

Para instalar y ejecutar este proyecto de Node-RED:

1. Clona el repositorio.
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia Node-RED en Windows o Linux:
   ```bash
   npm run start-linux
   ```

Nota: El script start-windows no ha sido probado; si lo pruebas, por favor proporciona retroalimentación o busca asistencia.

## Método manual

### Usando `npm link` en un Proyecto Local de Node-RED

Para instancias locales de Node-RED, utiliza `npm link` para enlazar simbólicamente tus nodos personalizados directamente en el `node_modules` del proyecto para desarrollo y pruebas en tiempo real.

#### Pasos para Enlazar Nodos Personalizados

1. **Crea un Enlace Simbólico Global para Tu Nodo**:
   - En el directorio de tu nodo personalizado, ejecuta `npm link`.
   - Esto crea un enlace simbólico global para tu nodo.

2. **Enlaza Tu Nodo en el Node-RED del Proyecto**:
   - En el directorio raíz de tu proyecto, ejecuta:
     ```bash
     npm link node-red-contrib-tu-nodo
     ```
   - Reemplaza `node-red-contrib-tu-nodo` con el nombre del paquete de tu nodo.

3. **Inicia Node-RED desde Tu Proyecto**:
   - Usa un script de tu `package.json` o ejecuta `node node_modules/node-red/red.js`.

4. **Desenlaza Después del Desarrollo**:
   - En el directorio de tu proyecto, ejecuta:
     ```bash
     npm unlink node-red-contrib-tu-nodo
     ```

### Configurando Enlaces Simbólicos para el Proyecto

Los enlaces simbólicos te permiten enlazar nodos personalizados de Node-RED desde un directorio de desarrollo al directorio de usuario de Node-RED sin duplicación de archivos.

#### Creando Enlaces Simbólicos

- **Linux**: Usa `ln -s [OBJETIVO] [NOMBRE_ENLACE]`.
- **Windows**: Usa el Símbolo del sistema como Administrador y `mklink /D [ENLACE] [OBJETIVO]`.

Los enlaces simbólicos aseguran actualizaciones instantáneas en Node-RED cuando se realizan cambios, eliminando la necesidad de copiar archivos después de cada modificación.

## Mantenimiento

Este proyecto y el experimento lo hizo Lucas, si tienes cualquier duda o necesitas ayuda porque quieres implementar algo de este repo, pregunta que hay confi.