'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Multa = use('App/Models/Multa')

/**
 * Resourceful controller for interacting with multas
 */
class MultaController {
  /**
   * Show a list of all multas.
   * GET multas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const multas = await Multa.all()

    return multas
  }

  /**
   * Create/save a new multa.
   * POST multas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth }) {
    const data = request.only(['value', 'name', 'type', 'board'])

    const multa = await Multa.create(data)

    return multa
  }

  /**
   * Display a single multa.
   * GET multas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response }) {
    const multa = await Multa.findOrFail(params.id)

    return multa
  }

  /**
   * Update multa details.
   * PUT or PATCH multas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const multa = await Multa.findOrFail(params.id)

    const data = request.only(['value', 'name', 'type', 'board'])

    multa.merge(data)

    await multa.save()

    return multa
  }

  /**
   * Delete a multa with id.
   * DELETE multas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const multa = await Multa.findOrFail(params.id)

    await multa.delete()
  }
}

module.exports = MultaController
