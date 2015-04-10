function roundNumber(number, locale) {
    var roundThis = number < 10 && number > -10;
    var rounded = roundThis ? Math.round( number * 10 ) / 10 : Math.round(number);
    var fixed = roundThis ? rounded.toFixed(1) : rounded.toString();
    if (locale != 'en') {
        fixed = fixed.replace('.', ',');
    }
    return fixed;
}