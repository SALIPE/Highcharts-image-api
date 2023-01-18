const exporter = require('highcharts-export-server');
const fs = require("fs")
var path = require('path');

const app = exporter.server.app();

const PORT = 8099;


app.post('/chart', (req, res) => {
    const body = req.body;
    var exportSettings = {
        type: 'png',
        options: {
            title: {
                text: 'My Chart'
            },
            xAxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "Mar", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            },
            series: [
                {
                    type: 'line',
                    data: [1, 3, 2, 4]
                },
                {
                    type: 'line',
                    data: [5, 3, 4, 2]
                }
            ]
        }
    };
    // var options = {
    //     root: path.join("/tmp/")
    // };
    //Set up a pool of PhantomJS workers
    var fileName = "tmp/" + body.filename.concat(".", exportSettings.type);
    console.log(fileName)
    exporter.initPool();
    exporter.export(exportSettings, function (err, response) {
        //The export result is now in res.
        //If the output is not PDF or SVG, it will be base64 encoded (res.data).

        // console.log(response)
        // const buffer = Buffer.from(response.data, "base64")
        // fs.writeFileSync(fileName, buffer)

        // .sendFile(fileName, options, function (err) {
        //     if (err) {
        //         next(err);
        //     } else {
        //         console.log('Sent:', fileName);
        //     }
        // });

        //Kill the pool when we're done with it, and exit the application
        exporter.killPool();
        // process.exit(1);
    });
    res.status(200)
        .json({
            data: null,
            filename: fileName,
            identification: body.identification
        });


})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
});









const teste = {
    type: 'png',
    options: {
        "chart": {
            "plotBackgroundColor": null,
            "plotBorderWidth": null,
            "plotShadow": false,
            "height": 600,
            "width": 1200
        },
        "title": {
            "text": "Comparative Chart"
        },
        "xAxis": {
            "categories": [
                "VALUE 1",
                "VALUE 2",
                "VALUE 3",
                "VALUE 4",
                "VALUE 5",
                "VALUE 6",
                "VALUE 7",
                "VALUE 8",
                "VALUE 9",
                "VALUE 10",
                "OUTROS"
            ]
        },
        "yAxis": {
            "title": {
                "text": "Amount"
            }
        },
        "plotOptions": {
            "series": {
                "dataLabels": {
                    "enabled": true,
                    "format": "{y} %"
                }
            }
        },
        "series": [
            {
                "type": "column",
                "name": 2021,
                "data": [
                    {
                        "name": "VALUE 1",
                        "y": 12.7
                    },
                    {
                        "name": "VALUE 2",
                        "y": 15.6
                    },
                    {
                        "name": "VALUE 3",
                        "y": 1.2
                    },
                    {
                        "name": "VALUE 4",
                        "y": 2.2
                    },
                    {
                        "name": "VALUE 5",
                        "y": 9.4
                    },
                    {
                        "name": "VALUE 6",
                        "y": 0.2
                    },
                    {
                        "name": "VALUE 7",
                        "y": 2.1
                    },
                    {
                        "name": "VALUE 8",
                        "y": 0.2
                    },
                    {
                        "name": "VALUE 9",
                        "y": 3.5
                    },
                    {
                        "name": "VALUE 10",
                        "y": 23.5
                    },
                    {
                        "name": "OUTROS",
                        "y": 29.4
                    }
                ]
            },
            {
                "type": "column",
                "name": 2022,
                "data": [
                    {
                        "name": "VALUE 1",
                        "y": 30.4
                    },
                    {
                        "name": "VALUE 2",
                        "y": 19.8
                    },
                    {
                        "name": "VALUE 3",
                        "y": 7.2
                    },
                    {
                        "name": "VALUE 4",
                        "y": 4.7
                    },
                    {
                        "name": "VALUE 5",
                        "y": 4.4
                    },
                    {
                        "name": "VALUE 6",
                        "y": 4.3
                    },
                    {
                        "name": "VALUE 7",
                        "y": 4
                    },
                    {
                        "name": "VALUE 8",
                        "y": 4
                    },
                    {
                        "name": "VALUE 9",
                        "y": 3.4
                    },
                    {
                        "name": "VALUE 10",
                        "y": 3.2
                    },
                    {
                        "name": "OUTROS",
                        "y": 14.7
                    }
                ]
            }
        ],
        "credits": {
            "enabled": false
        }
    }

}