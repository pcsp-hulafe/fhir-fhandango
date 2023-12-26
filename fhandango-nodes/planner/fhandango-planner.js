module.exports = function(RED) {
    function FhReducerNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        node.on('input', function(msg) {
            const fields = [config.field1, config.field2, config.field3, config.field4, config.field5].filter(f => f);
            let inputData = Array.isArray(msg.payload) ? msg.payload : [msg.payload];

            let extractedData = inputData.map(item => {
                let extractedItem = {};
                fields.forEach(field => {
                    let fieldParts = field.split('.');
                    let value = fieldParts.reduce((acc, part) => acc && acc[part], item);
                    if (value !== undefined) {
                        let key = fieldParts.length > 1 ? fieldParts[fieldParts.length - 1] : field;
                        extractedItem[key] = value;
                    }
                });
            return extractedItem;
        });

    msg.payload = extractedData;
    node.send(msg);
        });
    }

    RED.nodes.registerType("fh-planner", FhReducerNode);
};
