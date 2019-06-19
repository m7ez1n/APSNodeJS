'use strict'

const Route = use('Route')

Route.post('users', 'UserController.store')
Route.post('sessions', 'SessionController.store')
Route.post('/files', 'FileController.store')
Route.get('/files/:id', 'FileController.show')

Route.group(() => {
  Route.resource('multas', 'MultaController').apiOnly()
  Route.resource('informations', 'InformationController').apiOnly()
}).middleware(['auth'])
