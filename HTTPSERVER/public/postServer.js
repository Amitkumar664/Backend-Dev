const http=require('http');
const querystring=require('querystring');

const port=3000;

const server=http.createServer((req,res)=>{
  if(req.url==='/submit' && req.method==='POST'){
    let data='';
    req.on('data',(chunk)=>{
      data+=chunk.toString();
    });
    req.on('end',()=>{
      console.log('Received data:', data);
      let parseData=querystring.parse(data);
      console.log('Parsed Data:', parseData);

      let jsonString=JSON.stringify(parseData);
      console.log("js object to json string", jsonString);

      let final=JSON.parse(jsonString);

      console.log("json string to json data",final);
      res.writeHead(200,{'Content-Type':'application/form'});
      res.end('Data received successfully',jsonString);

  } );
return;

}
res.end('server is running');
});
server.listen(port,()=>{
  console.log(`server is listening on port ${port}`);
});