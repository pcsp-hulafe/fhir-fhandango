module.exports = function(RED) {
    function FhirResourceFilterNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        node.on('input', function(msg) {
            const fhirData = msg.payload.entry;
            const resourceType = config.resourceType;
            node.log(resourceType);
            let filteredData = fhirData.filter(item => item.resource && item.resource.resourceType === resourceType);

            msg.payload = filteredData;
            node.send(msg);
        });
    }

    RED.nodes.registerType("fh-resource filter", FhirResourceFilterNode);
}
