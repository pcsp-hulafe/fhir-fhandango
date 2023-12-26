module.exports = function(RED) {
    const axios = require('axios');

    function FhirQueryNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        
        var url = config?.uquery;
        var name = config?.nquery;

        // Configuración de las propiedades del nodo

        node.log("creado query");

        node.on('input', function(msg) {
            // Comprobar que la configuración esté completa
            if (!url) {
                node.error('La configuración del nodo es incompleta. Verifica que se haya proporcionado una URL del servidor, un tipo de recurso y parámetros de búsqueda.');
                return;
            }
        var payload = msg?.payload;
        node.log("ejecutado query");
        node.log(payload);


            let fhirSearchUrl = url + "/Patient/" + msg.payload + "/$everything";
            node.log(fhirSearchUrl);

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

    RED.nodes.registerType("fh-query", FhirQueryNode);
};

