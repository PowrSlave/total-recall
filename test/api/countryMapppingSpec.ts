/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the Total Recall - Memory Vacations contributors.
 * SPDX-License-Identifier: MIT
 */

import frisby = require('frisby')

const REST_URL = 'http://localhost:3000/rest'

describe('/rest/country-mapping', () => {
  it('GET no country mapping present in default configuration', () => {
    return frisby.get(REST_URL + '/country-mapping')
      .expect('status', 500)
  })
})
