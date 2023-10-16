const http = require('http');

// Create a server that listens on a specific port (e.g., 3000)
const server = http.createServer((req, res) => {
  // Set the response content type to HTML
  res.setHeader('Content-Type', 'text/html');
  
  // Write a response to the client
  res.write('<h1>Hello, Node.js Server!</h1>');
  
  // End the response
  res.end();
});

// Set the port where the server should listen
const port = 3000;

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
