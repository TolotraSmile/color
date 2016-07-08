var hexValue = 0;
var rgbValue = {
    r: 0,
    g: 0,
    b: 0
};

// Generate random hex color
var randomHex = function() {
    return (function(a) {
        var b = "";
        while (a--) {
            b += (~~(Math.random() * 16)).toString(16);
        }
        return b;
    })(6)
}

var body = document.body;
var hexcolor = document.getElementsByName('hexcolor')[0];
var rgbcolor = document.getElementsByName('rgbcolor')[0];
hexcolor.value = body.style.backgroundColor;

var updateHex = function(color) {
    if (color) {
        // Update current color
        hexValue = color;
        rgbValue = hexToRGB(hexValue);

        updateUI(hexValue, rgbValue);
    }
}

var updateUI = function(hex, rgb) {
    hexcolor.value = body.style.backgroundColor = hexToString(hex);
    rgbcolor.value = rgbToString(rgbValue.r, rgbValue.g, rgbValue.b);
    console.log(hexcolor.value);
};

var hexToRGB = function(hex) {
    hex = parseInt(hex, 16);
    var r = hex >> 16;
    var g = hex >> 8 & 0xFF;
    var b = hex & 0xFF;
    return {
        r: r,
        g: g,
        b: b
    };
};

// convert 0..255 R,G,B values to a hexidecimal color string
var rgbToHex = function(r, g, b) {
    var bin = r << 16 | g << 8 | b;
    return new Array(7 - h.length).join("0") + bin.toString(16).toUpperCase();
}

// Get the rgb string format of RGB color
var rgbToString = function(r, g, b) {
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

var hexToString = function(hex) {
    return ("#" + hex).toUpperCase();
}

// Attach space key in the body element to change current color
body.addEventListener('keyup', function(event) {
    if (event.code === 'Space') {
        updateHex(randomHex());
    }
});

hexcolor.addEventListener('input', function() {
    console.log('input changed to: ', hexcolor.value);
});

rgbcolor.addEventListener('input', function() {
    console.log('input changed to: ', rbgcolor.value);
});


(function() {
    updateHex(randomHex());
})();