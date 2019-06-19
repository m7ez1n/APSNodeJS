'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MultasSchema extends Schema {
  up () {
    this.create('multas', table => {
      table.increments()
      table
        .integer('files_id')
        .unsigned()
        .references('id')
        .inTable('files')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table
        .integer('cars_id')
        .unsigned()
        .references('id')
        .inTable('cars')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
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
