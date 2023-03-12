const exporter = require('highcharts-export-server');
const fs = require("fs")
require('events').EventEmitter.defaultMaxListeners = 15;

const app = exporter.server.app();

const PORT = 8099;


app.post('/chart', (req, res) => {
    const body = req.body;
    // var options = {
    //     root: path.join("/tmp/")
    // };
    //Set up a pool of PhantomJS workers
    exporter.initPool();
    exporter.export(body, function (err, response) {
        //The export result is now in res.
        //If the output is not PDF or SVG, it will be base64 encoded (res.data).

        try {
            const data = response.data;
            res.status(200)
                .json({
                    data
                });
        } catch (error) {
            console.log(error)
        }


        //Kill the pool when we're done with it, and exit the application
        exporter.killPool();
        // process.exit(1);
    });



})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
});








