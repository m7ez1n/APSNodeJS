'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MultasSchema extends Schema {
  up () {
    this.create('multas', table => {
      table.increments()
      table
        .integer('file_id')
        .unsigned()
        .references('id')
        .inTable('files')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('value').notNullable()
      table.string('name').notNullable()
      table.string('type').notNullable()
      table.string('board').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('multas')
  }
}

module.exports = MultasSchema
