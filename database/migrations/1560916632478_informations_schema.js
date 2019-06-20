'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InformationsSchema extends Schema {
  up () {
    this.create('informations', table => {
      table.increments()
      table.string('model').notNullable()
      table.string('owner').notNullable()
      table.string('color').notNullable()
      table.string('year').notNullable()
      table.string('board').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('informations')
  }
}

module.exports = InformationsSchema
