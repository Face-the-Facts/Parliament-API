/**
 * Parliament REST API
 * RESTful API for Candidates, Constituencies, Parliaments, Polls, Votes etc.
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This file is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the file manually.
 */

import * as api from "./api"
import { Configuration } from "./configuration"

const config: Configuration = {}

describe("CandidatesApi", () => {
  let instance: api.CandidatesApi
  beforeEach(function() {
    instance = new api.CandidatesApi(config)
  });

  test("getCandidate", () => {
    const id: number = 56
    return expect(instance.getCandidate(id, {})).resolves.toBe(null)
  })
  test("getCandidates", () => {
    const limit: number = 56
    const offset: number = 56
    const party: number = 56
    return expect(instance.getCandidates(limit, offset, party, {})).resolves.toBe(null)
  })
  test("postCandidate", () => {
    const body: api.Candidate = undefined
    return expect(instance.postCandidate(body, {})).resolves.toBe(null)
  })
})

describe("PartiesApi", () => {
  let instance: api.PartiesApi
  beforeEach(function() {
    instance = new api.PartiesApi(config)
  });

  test("deleteParty", () => {
    const id: number = 56
    return expect(instance.deleteParty(id, {})).resolves.toBe(null)
  })
  test("partiesGet", () => {
    const partyId: number = 56
    return expect(instance.partiesGet(partyId, {})).resolves.toBe(null)
  })
  test("partiesHead", () => {
    return expect(instance.partiesHead({})).resolves.toBe(null)
  })
  test("partiesIdGet", () => {
    const id: number = 56
    return expect(instance.partiesIdGet(id, {})).resolves.toBe(null)
  })
  test("patchParty", () => {
    const body: api.Party = undefined
    const id: number = 56
    return expect(instance.patchParty(body, id, {})).resolves.toBe(null)
  })
  test("postParty", () => {
    const body: api.Party = undefined
    return expect(instance.postParty(body, {})).resolves.toBe(null)
  })
  test("putParty", () => {
    const body: api.Party = undefined
    const id: number = 56
    return expect(instance.putParty(body, id, {})).resolves.toBe(null)
  })
})

