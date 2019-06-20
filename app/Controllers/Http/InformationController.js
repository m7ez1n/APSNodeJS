'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Information = use('App/Models/Information')

/**
 * Resourceful controller for interacting with information
 */
class InformationController {
  /**
   * Show a list of all information.
   * GET information
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const informations = await Information.all()

    return informations
  }

  /**
   * Create/save a new information.
   * POST information
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth }) {
    const data = request.only(['model', 'owner', 'color', 'year', 'board'])

    const informations = await Information.create(data)

    return informations
  }

  /**
   * Display a single information.
   * GET information/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const informations = await Information.findOrFail(params.id)

    return informations
  }

  /**
   * Update information details.
   * PUT or PATCH information/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const informations = await Information.findOrFail(params.id)

    const data = request.only(['model', 'owner', 'color', 'year', 'board'])

    informations.merge(data)

    await informations.save()

    return informations
  }

  /**
   * Delete a information with id.
   * DELETE information/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const informations = await Information.findOrFail(params.id)

    await informations.delete()
  }
}

module.exports = InformationController
