const express = require('express');
const router = express.Router();
const api = require('./Api/Api/api.helper');

router.route('/Teams').get(api.getTeams);
router.route('/Teams/:teams_name').get(api.getTeamsByName);
router.route('/Matchs/:tournament_id').get(api.getMatch);
router.route('/Tournaments').get(api.getTournaments);
router.route('/Tournament/:tournament_id').get(api.allTournamentInfo);

module.exports = router;