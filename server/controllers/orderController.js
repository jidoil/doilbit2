const buyOrder = require('../models/buyOrder');
const sellOrder = require('../models/sellOrder');
const bank = require('../models/bank');
const User = require('../models/userModel');

exports.buy = (req, res, next) => {
    buyOrder.create(req.body)
        .then(order => {
            res.status(201).json({
                status: 'success',
                order
            });
        })
        .catch(err => {
            res.status(400).json({
                status: 'fail',
                message: err
            });
        });
}

exports.sell = (req, res, next) => {
    sellOrder.create(req.body)
        .then(order => {
            res.status(201).json({
                status: 'success',
                order
            });
        })
        .catch(err => {
            res.status(400).json({
                status: 'fail',
                message: err
            });
        });
}

exports.bank = (req, res, next) => {
    bank.create(req.body)
        .then(order => {
            res.status(201).json({
                status: 'success',
                order
            });
        })
        .catch(err => {
            res.status(400).json({
                status: 'fail',
                message: err
            });
        });
}

exports.signup = (req, res, next) => {
    User.create(req.body)
        .then(user => {
            res.status(201).json({
                status: 'success',
                user
            });
        })
        .catch(err => {
            res.status(400).json({
                status: 'fail',
                message: err
            });
        });
}