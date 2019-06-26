const multiples = (x, n) => {
    // let document.getElementById('multiples').innerHTML
    // let document.getElementById('slots').innerHTML
    z=[]
    for (i=1; i<=n; i++){
        z.push(i * x)
    }
    return z;
}

console.log(multiples(6,17))
