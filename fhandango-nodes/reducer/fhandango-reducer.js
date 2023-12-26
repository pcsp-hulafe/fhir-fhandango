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
            let currentLevel = extractedItem;

            fieldParts.forEach((part, index) => {
                if (index === fieldParts.length - 1) {
                    currentLevel[part] = fieldParts.reduce((acc, part) => acc && acc[part], item);
                } else {
                    currentLevel[part] = currentLevel[part] || {};
                    currentLevel = currentLevel[part];
                }
            });
        });
        return extractedItem;
    });

    msg.payload = extractedData;
    node.send(msg);
});
 
    }

    RED.nodes.registerType("fh-reducer", FhReducerNode);
};
