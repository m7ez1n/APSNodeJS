'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FileSchema extends Schema {
  up () {
    this.create('files', table => {
      table.increments()
      table
        .integer('id_multas')
        .unsigned()
        .references('id')
        .inTable('multas')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table
        .integer('information_id')
        .unsigned()
        .references('id')
        .inTable('information')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.string('file').notNullable()
      table.string('name').notNullable()
      table.string('type', 20)
      table.string('subtype', 20)
      table.timestamps()
    })
  }

  down () {
    this.drop('files')
  }
}

module.exports = FileSchema
