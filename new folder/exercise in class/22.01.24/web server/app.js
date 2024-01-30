require('http').createServer((req, res) => {
    switch(req.url) {
        case '/':
            res.writeHead(200).end('homepage');
            break;
        case "/products":
            res.writeHead(200).end('productsPage');  
            break;  
    }
})
.listen(8080, () => {

});
