let snowflakesCount = 200; // Snowflake count, can be overwritten by attrs
const BASE_CSS = ``; // Put your custom base css here


// set global attributes
if (typeof TOTAL_SNOWFLAKES !== 'undefined') {
    snowflakesCount = TOTAL_SNOWFLAKES;
}

const BODY_HEIGHT_PX = document.body.offsetHeight;
const PAGE_HEIGHT_VH = (100 * BODY_HEIGHT_PX / window.innerHeight);

// get params set in snow div
function getSnowAttributes() {
    const snowWrapper = document.getElementById('snow');
    if (snowWrapper) {
        snowflakesCount = Number(
            snowWrapper.attributes?.total?.value || snowflakesCount
        );
    }
}

// This function allows you to turn on and off the snow
function toggleSnow() {
    let checkBox = document.getElementById("toggle-snow");
    if (checkBox.checked == true) {
        document.getElementById('snow').style.display = "block";
    }
    else {
        document.getElementById('snow').style.display = "none";
    }
}

// Creating snowflakes
function spawnSnow(snowDensity = 200) {
    snowDensity -= 1;

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
    css.appendChild(document.createTextNode(rule)); // Support for the rest
    document.getElementsByTagName("head")[0].appendChild(css);
}

// Math
function randomInt(value = 100) {
    return Math.floor(Math.random() * value) + 1;
}

function randomIntRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

// Create style for snowflake
function spawnSnowCSS(snowDensity = 200) {
    let snowflakeName = "snowflake";
    let rule = BASE_CSS;

    for (let i = 1; i < snowDensity; i++) {
        let randomX = Math.random() * 100; // vw
        let randomOffset = Math.random() * 10 // vw;
        let randomXEnd = randomX + randomOffset;
        let randomXEndYoyo = randomX + (randomOffset / 2);
        let randomYoyoTime = getRandomArbitrary(0.3, 0.8);
        let randomYoyoY = randomYoyoTime * PAGE_HEIGHT_VH; // vh
        let randomScale = Math.random();
        let fallDuration = randomIntRange(10, PAGE_HEIGHT_VH / 10 * 3); // s
        let fallDelay = randomInt(PAGE_HEIGHT_VH / 10 * 3) * -1; // s
        let opacity = Math.random();

        rule += `
        .${snowflakeName}:nth-child(${i}) {
            opacity: ${opacity};
            transform: translate(${randomX}vw, -10px) scale(${randomScale});
            animation: fall-${i} ${fallDuration}s ${fallDelay}s linear infinite;
        }

        @keyframes fall-${i} {
            ${randomYoyoTime * 100}% {
                transform: translate(${randomXEnd}vw, ${randomYoyoY}vh) scale(${randomScale});
            }

            to {
                transform: translate(${randomXEndYoyo}vw, ${PAGE_HEIGHT_VH}vh) scale(${randomScale});
            }
            
        }
        `
    }
    addCss(rule);
}

// Load the rules and execute after the DOM loads
window.onload = function () {
    getSnowAttributes();
    spawnSnowCSS(snowflakesCount);
    spawnSnow(snowflakesCount);
};

// TODO add progress bar for slower clients
