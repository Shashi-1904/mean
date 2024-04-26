const app = require('./config/express');
const config = require('./config/config')
const express=require('express')
const path=require('path')

// initialize mongo
require('./config/mongoose');

app.use(express.json());

const _dirname=path.dirname("")

const buildpath = path.join(_dirname,"../build")

app.use(express.static(buildpath));


app.listen(config.port, () => {
    console.log(`listening on port ${config.port} (${config.env})`);
});

