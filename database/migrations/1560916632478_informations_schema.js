'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InformationsSchema extends Schema {
  up () {
    this.create('informations', table => {
      table.increments()
      table
        .integer('files_id')
        .unsigned()
        .references('id')
        .inTable('files')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table
        .integer('id_multas')
        .unsigned()
        .references('id')
        .inTable('multas')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
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
