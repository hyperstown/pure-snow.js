# PureSnow.js

Snow falling slowly on a winter night. Probably the most calming and peaceful snowfall effect written in pure JS/CSS. (No SCSS). 

Inspired by: [alphardex](https://codepen.io/alphardex/pen/dyPorwJ) (SCSS Version) and [YusukeNakaya](https://codepen.io/YusukeNakaya/pen/NWPqvWW) (Vue implementation).

PureSnow.js was created for those who don't want to install any additional libraries and want to change some variables on the fly. \
If you only need the effect I recommend downloading compiled version of [alphardex's](https://codepen.io/alphardex/details/dyPorwJ) work. 

### Controlling snowfall density:

Default amount of snowflakes is set to 400. This might be challenging for an older GPU. \
You can change that by declaring variable `total` eg:
```html
<script>let total = 200;</script>
```
You can also do that by changing `snowflakes_count` inside the script.


### No CSS files whatsoever:
It is also possible to get rid of style.css file. Just paste it's content to declaration of variable `base_css` in PureSnow.js file eg:

```js
let base_css = `
    body {
        height: 100vh;
        background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
        overflow: hidden;
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

```


Demo: https://hyperstown.github.io/puresnowjs/
