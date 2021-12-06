# pureSnow.js

Snow falling slowly on a winter night. Probably the most calming and peaceful snowfall effect written in pure JS/CSS. (No SCSS). 

Inspired by: [alphardex](https://codepen.io/alphardex/pen/dyPorwJ) (SCSS Version) and [YusukeNakaya](https://codepen.io/YusukeNakaya/pen/NWPqvWW) (Vue implementation).

pureSnow.js was created for those who don't want to install any additional libraries and want to change some variables on the fly. \
If you only need the effect I recommend downloading compiled version of [alphardex's](https://codepen.io/alphardex/details/dyPorwJ) work. 

### Controlling snowfall density:

Default amount of snowflakes is set to 400. This might be challenging for an older GPU. \
You can change that by declaring variable `total` eg:
```html
<script>let total = 200;</script>
```
You can also do that by changing `snowflakesCount` inside the script.


### No CSS files whatsoever:
It is also possible to get rid of style.css file. Just paste it's content to declaration of variable `baseCss` in pureSnow.js file eg:

```js
let baseCss = `
    body {
        background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
        overflow-x: hidden;
        min-height: 100vh; 
        /* If you want to change the site height you can remove overflow-y */
        /* pureSnow will automatically detect height of body tag */
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

```

### Page height:
Keep in mind that increasing page height might impact performance. 
While increasing page height snowflake count should also be increased.

For example:

Page `height:100vh` ---> `let total = 200`

Page `height:200vh` ---> `let total = 300`

---

Demo: https://hyperstown.github.io/puresnowjs/
