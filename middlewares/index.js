import express from 'express';

// Writing custom middlewares
const logger = function (req, res, next) {
    console.log('/' + req.method);                      // Before request is processed
    next();
    console.log('After request is processed...')        // After request is processed
};


export {
    logger
}
