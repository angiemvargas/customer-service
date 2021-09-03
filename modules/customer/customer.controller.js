(function () {
    'use strict';

    var express = require('express');
    var router = express.Router();

    var CustomerMiddleware = require('./customer.module')().CustomerMiddleware;

    router.post('/customers',
        CustomerMiddleware.addCustomer,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.get('/customers',
        CustomerMiddleware.getCustomers,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.get('/customers/:customerId',
        CustomerMiddleware.getCustomerById,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.put('/customers/:customerId',
        CustomerMiddleware.modifyCustomer,
        function (req, res) {
            res.status(200).json(req.response);
        });
    
    router.delete('/customers/:customerId',
        CustomerMiddleware.removeCustomer,
        function (req, res) {
            res.status(200).json(req.response);
        });
    module.exports = router;

})();