/*
 *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */

'use strict';

var express = require('express');
var https = require('http');
var pem = require('pem');

pem.createCertificate({days: 1, selfSigned: true}, function(err, keys) {
  var options = {
    // key: keys.serviceKey,
    // cert: keys.certificate
  };

  var app = express();

  app.use(express.static('../'));

  // Create an HTTPS service.
  https.createServer(options, app).listen({port:3000, host:"0.0.0.0"});

  console.log('serving on https://localhost:3000');
});
