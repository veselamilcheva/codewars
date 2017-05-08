function to_nato(words) {
    var arr = words.toLowerCase().split("");

    var newarr = ''; 
    var obj = {

        a: 'Alfa',
        b: 'Bravo',
        c: 'Charlie',
        d: 'Delta',
        e: 'Echo',
        f: 'Foxtrot',
        g: 'Golf',
        h: 'Hotel',
        i: 'India',
        j: 'Juliett',
        k: 'Kilo',
        l: 'Lima',
        m: 'Mike',
        n: 'November',
        o: 'Oscar',
        p: 'Papa',
        q: 'Quebec',
        r: 'Romeo',
        s: 'Sierra',
        t: 'Tango',
        u: 'Uniform',
        v: 'Victor',
        w: 'Whiskey',
        x: 'Xray',
        y: 'Yankee',
        z: 'Zulu'

    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== ' ') {
            if (typeof obj[arr[i]] !== 'undefined') {
                newarr += obj[arr[i]] + ' ';
            } else {
                newarr += arr[i] + ' ';
            }
        }
    }

    return newarr.trim();
}

console.log(to_nato('If you can re!a1d'));
