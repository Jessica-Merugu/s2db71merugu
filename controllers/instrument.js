var Instrument = require('../models/instrument');
// List of all instruments
exports.instrument_list = async function (req, res) {
    try {
        theInstruments = await Instrument.find();
        res.send(theInstruments);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific instrument.
exports.instrument_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Instrument.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle Instrument create on POST.
exports.instrument_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Instrument();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"instrument_name":"Mustang GT", "instrument_size":"Lucid Red Pearl", "instrument_cost":37000}
    document.instrument_name = req.body.instrument_name;
    document.instrument_cost = req.body.instrument_cost;
    document.instrument_size = req.body.instrument_size;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle instrument delete form on DELETE.
exports.instrument_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Instrument delete DELETE ' + req.params.id);
};
// Handle instrument update form on PUT.
exports.instrument_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Instrument.findById(req.params.id)
        // Do updates of properties
        if (req.body.instrument_name) toUpdate.instrument_name = req.body.instrument_name;
        if (req.body.instrument_cost) toUpdate.instrument_cost = req.body.instrument_cost;
        if (req.body.instrument_size) toUpdate.instrument_size = req.body.instrument_size;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};

// VIEWS
// Handle a show all view
exports.instrument_view_all_Page = async function (req, res) {
    try {
        theInstruments = await Instrument.find();
        res.render('instruments', { title: 'Instrument Search Results', results: theInstruments });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};