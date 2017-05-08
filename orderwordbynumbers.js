function order(words) {
    if (!words || !words.trim().length) {
        return "";
    }
    var a =  words.split(' ');
    var values = {};
    var val = '';
    for (var i = 0; i < a.length; i++) {
       values[a[i].match(/\d+/)[0]] = a[i];
    }
    for (var key in values) {
        val += values[key] + ' ';
    }
    return val.trim();
}
 console.log(order('string5678 gfgf5677ffg 6778'));
