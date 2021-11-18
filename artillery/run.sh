artillery run -o ./reports/api-test.json api-test.yaml
artillery report ./reports/api-test.json

artillery run -o ./reports/socketio-chat-test.json socketio-chat-test.yaml
artillery report ./reports/socketio-chat-test.json

