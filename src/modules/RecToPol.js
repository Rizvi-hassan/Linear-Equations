const radToDeg = (rad)=>{
    let deg = 180 / Math.PI * rad;
    return deg; 
}

export const rectToPol = (x, y) =>{
    let radius = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    let radian = Math.atan(y/x);
    let deg = radToDeg(radian);
    return [radius, deg, radian];
}
