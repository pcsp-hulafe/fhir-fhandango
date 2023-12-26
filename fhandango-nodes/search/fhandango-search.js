module.exports = function(RED) {
    const axios = require('axios');

    function FhirSearchNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        // Configuración de las propiedades del nodo
        node.name = config.name || 'FHIR Search';
        node.serverUrl = config.serverUrl || '';

        node.on('input', function(msg) {
            // Obtener la información de la solicitud desde el mensaje de entrada
            /*
            const serverUrl = node.serverUrl;
            const resourceType = msg.resourceType;
            const searchParams = msg.searchParams;
            */
            // Obtener los valores de los campos del formulario
            const serverUrl = config.url;
            node.log("Ejecutamos fh-search");



            // Comprobar que la configuración esté completa
            if (!serverUrl) {
                node.error('La configuración del nodo es incompleta. Verifica que se haya proporcionado una URL del servidor, un tipo de recurso y parámetros de búsqueda.');
                return;
            }

            // Construir la URL de consulta FHIR con parámetros de búsqueda
            let fhirSearchUrl = serverUrl;

            // Realizar la solicitud HTTP GET al servidor FHIR
            axios.get(fhirSearchUrl)
                .then(response => {
                    msg.payload = response.data;
                    node.send(msg);
                })
                .catch(error => {
                    node.error(`Error al realizar la solicitud HTTP: ${error.message}`);
                });
        });
    }

    RED.nodes.registerType("fh-search", FhirSearchNode);
};
