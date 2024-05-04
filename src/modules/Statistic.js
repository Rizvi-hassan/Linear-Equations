const sum = (list)=>{
    let s = 0;
    for (let i  = 0; i  < list.length; i ++) {
        s += list[i];
    }
    return s;
}

export const statistics = (data) =>{
    let n = data.length;
    let mean = sum(data) / n;
    let sq = data.map( e =>{
        return Math.pow((e-mean), 2);
    })
    let variance = sum(sq) / (n-1);

    let sd = Math.sqrt(variance);

    return [mean, variance, sd];
}