export const quadratic = (a, b, c)=>{
    console.log(typeof(a))
    const d = b**2 - 4*a*c;
    if (a === 0)
        return "Coefficient of x² cannot be 0";

    if (d < 0)
        return "No real solutions";

    let r1 = (-b + Math.sqrt(d)) / 2 * a;
    let r2 = (-b - Math.sqrt(d)) / 2 * a;

    return [r1, r2];
}