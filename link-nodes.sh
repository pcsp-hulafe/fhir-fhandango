#!/bin/bash

# Asumiendo que este script se ejecuta desde la raíz del proyecto Node-RED
# Cambia 'mis-nodos' por el nombre de tu directorio de nodos personalizados

# Navegar al directorio del nodo personalizado y crear un enlace global
cd ./
npm link

# Volver al directorio del proyecto Node-RED y enlazar el nodo personalizado
cd ../node_modules
npm link node-red-contrib-fhandango-nodes

echo "Nodos enlazados correctamente en Linux."
