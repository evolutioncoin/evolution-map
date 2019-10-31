// Copyright (c) 2018, Brandon Lehmann, The TurtleCoin Developers
// Copyright (c) 2019, Leos Stehlik, adapted for use with DeroGold
//
// Please see the included LICENSE file for more information.

'use strict'

module.exports.DeroGoldd = require('./lib/derogoldd-rpc.js')
module.exports.TurtleService = require('./lib/service-rpc.js')

// These exports will be deprecated in a future version.
// Continue to use them at your own risk.
module.exports.Walletd = require('./lib/service-rpc.js')
module.exports.Service = require('./lib/service-rpc.js')
module.exports.Client = require('./lib/derogoldd-rpc.js')
