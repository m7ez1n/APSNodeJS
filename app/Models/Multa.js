'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Multa extends Model {
  file () {
    return this.belongsTo('App/Models/File')
  }
}

module.exports = Multa
