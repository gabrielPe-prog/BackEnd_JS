import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer.prompt([{
    message:"Whats's your Instagram?",
    name:"URL"
    },
]).then((answres) =>{
    const url = answres.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));
}).catch((error) =>{
    if (error.isTtyError) {
        console.log("Deu erro");
    }
});