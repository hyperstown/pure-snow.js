let snowflakesCount = 400;

if (typeof total !== 'undefined'){
    snowflakesCount = total;
}


// This function allows you to turn on and off the snow
function toggleSnow() {
    let checkBox = document.getElementById("toggleSnow");
    if (checkBox.checked == true) {
        document.getElementById('snow').style.display = "block"
    }
    else {
        document.getElementById('snow').style.display = "none"
    }
}

// Creating snowflakes
function spawnSnowClass(snowDensity = 200) {
    snowDensity-= 1;

    for (let x = 0; x < snowDensity; x++) {
        let board = document.createElement('div');
        board.className = "snowflake";

        document.getElementById('snow').appendChild(board);
    }
}

// Append style for each snowflake to the head
function addCss(rule) {
    let css = document.createElement('style');
    css.type = 'text/css';
    if (css.styleSheet) {
        css.styleSheet.cssText = rule; // Support for IE
    } 
    else {
        css.appendChild(document.createTextNode(rule)); // Support for the rest
    }
    document.getElementsByTagName("head")[0].appendChild(css);
}



// Math
function random_int(value = 100){
    return Math.floor(Math.random() * value) + 1;
}

function random_range(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Create style for snowflake
function spawnSnowCSS(snowDensity = 200){
    let snowflakeName = "snowflake";
    let rule = ``
    for(let i = 1; i < snowDensity; i++){
        let random_x = random_int(1000000) * 0.0001; // vw
        let random_offset = random_range(-100000, 100000) * 0.0001 // vw;
        let random_x_end = random_x + random_offset;
        let random_x_end_yoyo = random_x + (random_offset / 2);
        let random_yoyo_time = random_range(30000, 80000) / 100000;
        let random_yoyo_y = random_yoyo_time * 100; // vh
        let random_scale = random_int(10000) * 0.0001;
        let fall_duration = random_range(10, 30) * 1; // s
        let fall_delay = random_int(30) * -1; // s
        let opacity_ = random_int(10000) * 0.0001

        // Round values to get rid of floats calculation errors
        random_x = Math.round((random_x + Number.EPSILON) * 100000) / 100000;
        random_offset = Math.round((random_offset + Number.EPSILON) * 100000) / 100000;
        random_x_end = Math.round((random_x_end + Number.EPSILON) * 100000) / 100000;
        random_yoyo_y = Math.round((random_yoyo_y + Number.EPSILON) * 100000) / 100000;
        random_x_end_yoyo = Math.round((random_x_end_yoyo + Number.EPSILON) * 100000) / 100000;
        random_scale = Math.round((random_scale + Number.EPSILON) * 100000) / 100000;
        opacity_ = Math.round((opacity_ + Number.EPSILON) * 100000) / 100000;


        rule += `
        .${snowflakeName}:nth-child(${i}) {
            opacity: ${opacity_};
            transform: translate(${random_x}vw, -10px) scale(${random_scale});
            animation: fall-${i} ${fall_duration}s ${fall_delay}s linear infinite;
        }

        @keyframes fall-${i} {
            ${random_yoyo_time*100}% {
                transform: translate(${random_x_end}vw, ${random_yoyo_y}vh) scale(${random_scale});
            }

            to {
                transform: translate(${random_x_end_yoyo}vw, 100vh) scale(${random_scale});
            }
            
        }
        `
        //console.log(rule);
    }

    addCss(rule);
}

// Load the rules and execute after the DOM loads
window.onload = function() {
    spawnSnowCSS(snowflakesCount);
    spawnSnowClass(snowflakesCount);
};