const degToRad = (deg) =>{
    let rad = Math.PI / 180 * deg;
    return rad;
}

export const polToRect = (radius, deg)=>{
    const x = radius * Math.cos(degToRad(deg));
    const y = radius * Math.sin(degToRad(deg));
    return [x, y];
}