function findAdded(st1, st2){
    var a = st1.split('');
    var b = st2.split('');
    var found = false;
    var added = [];

    for ( var i = 0; i < b.length; i++ ) {
        found = false;
        for ( var j = 0; j < a.length; j++ ) {
            if ( b[i] === a[j] ) {
                found = true; 
                a.splice(j, 1) 
                break; 
            } 
        }

        if ( found == false ) {
            added.push( b[i] );
        }   
    }
    

    return added.sort().join('');
   
}

console.log(findAdded('4455446', '447555446666'));
