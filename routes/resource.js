var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var costume_controller = require('../controllers/costume');
var instrument_controller = require('../controllers/instrument');

/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// costume ROUTES ///
// POST request for creating a costume.
router.post('/costumes', costume_controller.costume_create_post);
// DELETE request to delete costume.
router.delete('/costumes/:id', costume_controller.costume_delete);
// PUT request to update costume.
router.put('/costumes/:id', costume_controller.costume_update_put);
// GET request for one costume.
router.get('/costumes/:id', costume_controller.costume_detail);
// GET request for list of all costume items.
router.get('/costumes', costume_controller.costume_list);

/// instrument ROUTES ///
// POST request for creating a instrument.
router.post('/instruments', instrument_controller.instrument_create_post);
// DELETE request to delete instrument.
router.delete('/instruments/:id', instrument_controller.instrument_delete);
// PUT request to update instrument.
router.put('/instruments/:id', instrument_controller.instrument_update_put);
// GET request for one instrument.
router.get('/instruments/:id', instrument_controller.instrument_detail);
// GET request for list of all instrument items.
router.get('/instruments', instrument_controller.instrument_list);
module.exports = router;
