import http.server
import socketserver

HandlerClass = http.server.SimpleHTTPRequestHandler

HandlerClass.extensions_map[".js"] = "text/javascript"
HandlerClass.extensions_map[".mjs"] = "text/javascript"

with socketserver.TCPServer(("0.0.0.0", 8000), HandlerClass) as httpd:
    httpd.serve_forever()
