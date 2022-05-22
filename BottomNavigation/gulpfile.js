const { src, dest, watch} = require("gulp");
const sass = require("gulp-sass");

const compileSass= () => 
    src("./style.scss")
        .pipe(
            sass({
                outputStyle: "expanded"
            })
        )
        .pipe(dest("."));

const watchSassFiles = () => watch("./style.scss", compileSass);

exports.default = watchSassFiles;