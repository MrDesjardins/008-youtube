npx grpc_tools_node_protoc \
--js_out=import_style=commonjs,binary:./generated \
--grpc_out=./generated \
--ts_out=./generated \
./grpcServer/*.proto