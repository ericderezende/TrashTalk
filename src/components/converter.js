//Eric

import React from 'react';
var fs = require('fs');
var axios = require('axios');

const Converter = (props) => {

    const file = props.setFile('../public/images/HTB1Y.V6aIrrK1Rjy1zeq6xalFXaA.jpg');

    // let result, confidence;
    // let outputJSON;

    // axios.defaults.headers.common['Content-Type'] = "application/json";
    // axios.defaults.headers.common['Authorization'] = "Bearer "/* Copy token key here */;
    // // function to encode file data to base64 encoded string
    // const base64_encode = (file) =>{
    //     // read binary data
    //     var bitmap = fs.readFileSync(file);
    //     // convert binary data to base64 encoded string
    //     return new Buffer(bitmap).toString('base64');
    // }

    // var base = base64_encode('./images/20200201_175818.jpg');
    // axios.post("https://automl.googleapis.com/v1beta1/projects/766644774605/locations/us-central1/models/ICN5802549470285529088:predict",
    //     {
    //         "payload": {
    //             "image": {
    //                 "imageBytes": base
    //             }
    //         }
    //     }).then(function(res){

    //         if (Object.keys(res.data).length == 0){
    //             result = 'trash'
    //             confidence = 99;
    //         } else{
    //             result = res.data.payload[0].displayName;
    //             confidence = res.data.payload[0].classification.score;
    //             confidence = confidence * 100;
    //             confidence = Math.round(confidence);
    //         }

    //         let temp = {
    //             "result" : result,
    //             "confidence" : confidence
    //         };

    //         temp = JSON.stringify(temp);

    //         outputJSON = JSON.parse(temp);
    //         console.log(outputJSON);
    //         fs.writeFile('output.json', JSON.stringify(outputJSON), 'utf8', (err, data) => {
    //             if (err) console.log(err);
    //             else console.log('written');
    //     });
    // }).catch(function(err) {
    //     console.log(err);
    // });

    return (
        <div>
            <b>
                We Lit!
            </b>
            <img src = {file} height="200" width="200">

            </img>
        </div>
    );

};
export default Converter;