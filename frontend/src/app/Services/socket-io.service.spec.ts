/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the Total Recall - Memory Vacations contributors.
 * SPDX-License-Identifier: MIT
 */

import { inject, TestBed } from '@angular/core/testing'

import { SocketIoService } from './socket-io.service'

describe('SocketIoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocketIoService]
    })
  })

  it('should be created', inject([SocketIoService], (service: SocketIoService) => {
    expect(service).toBeTruthy()
  }))
})
