# pure-snow.js

A simple JavaScript package that generates snowflakes and corresponding CSS to make them fall on your webpage.

Written in pure JS/CSS. (No SCSS). 

Inspired by: [alphardex](https://codepen.io/alphardex/pen/dyPorwJ) (SCSS Version) and [YusukeNakaya](https://codepen.io/YusukeNakaya/pen/NWPqvWW) (Vue implementation).

pure-snow.js was created for those who don't want to install any additional libraries and want to change some variables on the fly. \
If you only need the effect I recommend downloading compiled version of [alphardex's](https://codepen.io/alphardex/details/dyPorwJ) work. 



## Installation

### npm

To install via npm, run the following command in your terminal:

```bash
npm install pure-snow.js
```

### Script Tag

To use the script via a script tag, include the following in your HTML file:

```html
<script src="/path/to/pure-snow.js"></script>
```

## Usage (Module)

To generate snowflakes, you can use the `generateSnow` function.

```js
// import "pure-snow.js/style.css"; // Remember to import style.css
import { createSnow, showSnow } from "pure-snow.js";

generateSnow(); // creates snowflakes and generate css for them
showSnow(true); // snow can be disabled using showSnow function
```

**NOTE: When used via a script tag generateSnow will run after document has been loaded.**



### Controlling snowfall density:

Default amount of snowflakes is set to 200. This might be challenging for an older GPU. \
You can change that by adding attribute `count` to snow div eg:
```html
<div id="snow" count="200"></div>
```



### No CSS files whatsoever:
It is also possible to get rid of style.css file. Just paste it's content to declaration of const `BASE_CSS` in script above pure-snow.js file eg:

```html
<script>
const BASE_CSS = `
    body {
        background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
        overflow-x: hidden;
        min-height: 100vh; 
        /* If you want to change the site height you can remove overflow-y */
        /* pure-snow will automatically detect height of body tag */
        overflow-y: hidden;
        color: white;
    }
    
    .snowflake {
        position: absolute;
        width: 10px;
        height: 10px;
        background: white;
        border-radius: 50%;
        filter: drop-shadow(0 0 10px white);
    }
`
</script>
<script src="/path/to/pure-snow.js" defer></script>
```

## Example

Here is a full example of how you might use the `pure-snow.js` in a webpage:

```html
<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/path/to/style.css">
        <script src="/path/to/pure-snow.js" defer></script>
        <!-- Generated snowflake styles will be injected here --> 
    </head>
    <body>
        <div id="snow" count="200"></div>
        <!-- Your content goes here --> 
    </body>
</html>
```

## Caveats

### Page height:
Keep in mind that increasing page height might impact performance. 
While increasing page height snowflake count should also be increased.

For example:

Page `height:100vh` ---> `count = 200`

Page `height:200vh` ---> `count = 300`


## Demo: 
https://hyperstown.github.io/pure-snowjs/


## License

This project is licensed under the MIT License. See the LICENSE file for more details.