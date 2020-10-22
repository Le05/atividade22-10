module.exports  = app => {
  const controller = app.controllers.games;

  app.route('/api/v1/games')
    .get(controller.listGames)
    .post(controller.saveGames);

  app.route('/api/v1/games/:gameId')
    .delete(controller.removeGames);

  app.route('/api/v1/games')
    .put(controller.putGames);
}