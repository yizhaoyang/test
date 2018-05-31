const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


#normal {
  display: inline
  position: relative
}

#hiden {
  display: none
  position: relative
}


var content = document.getElementById("conetnt");
var button = document.getElementById("show-more");

button.onclick = function(){
  if(content.className=="open"){
    //shrink the box
    content.className="";
    button.innerHTML="show more"
  } else{
    //expand the box
    content.className="open";
    button.innerHTML="show less"
  }
}
