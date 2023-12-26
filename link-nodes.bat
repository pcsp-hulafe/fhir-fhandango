@echo off

REM Asumiendo que este script se ejecuta desde la raíz del proyecto Node-RED
REM Cambia 'mis-nodos' por el nombre de tu directorio de nodos personalizados

REM Navegar al directorio del nodo personalizado y crear un enlace global
cd .\fhandango-nodes
npm link

REM Volver al directorio del proyecto Node-RED y enlazar el nodo personalizado
cd ..
cd .\node_modules
npm link node-red-contrib-fhandango-nodes

echo Nodos enlazados correctamente en Windows.
