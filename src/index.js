const express = require('express');
const {serverConfig,logger} = require('./config');
const apiRoutes = require('./routes')

const app = express();

app.use('/api',apiRoutes)

app.listen(serverConfig.PORT,()=>{
    console.log(`successfully started the server  on port: ${serverConfig.PORT} `);
    logger.info('Succsfully started the server')
}) 