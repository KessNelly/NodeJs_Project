const http = require('http');
const fs = require('fs');
const port = 5015

const server = http.createServer((req,res)=>{
       res.writeHead(200, {'content-type': 'application/pdf'});
       fs.readFile('./publics/htbm.pdf', (error, data) => {
        if (error) {
            res.json({
                'status': 'error',
                 msg : err
            })
            
        } else {
            res.write(data)
            res.end()
        }
       });

});


server.listen(port, () => {
    console.log(`app listening on port ${port}!`);
})