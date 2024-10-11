import { quadratic } from "./quadratic";

const getFactors = (a) => {
    let factors = [];
    for (let i = 1; i <= Math.abs(a); i++) {
        if (a % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}

export const cubic = (a, b, c, d) => {

    const fx = (x)=>{
        return a * Math.pow(x, 3) + b * Math.pow(x, 2) + c * x + d;
    }

    const synthetic_division = (r)=>{
        let c1 = 0, c2 = 0, c3 = 0;
        c1 = a;
        c2 = c1*r + b;
        c3 = c2 * r + c;

        return [c1, c2, c3];
    }

    let r1 = 0;

    let possible_p = getFactors(d);
    let possible_q = getFactors(a);


    outerLoop:
    for(let p of possible_p)
    {
        for(let q of possible_q)
        {
            if(fx(p/q) === 0)
            {
                r1 = p/q;

                break outerLoop;
            }
            else if(fx(- p/q) === 0)
            {
                r1 = - p/q ;

                break outerLoop;
            }
        }
    }

    const quadratic_coeff = synthetic_division(r1);
    const res = quadratic(quadratic_coeff[0], quadratic_coeff[1], quadratic_coeff[2]);
    if(typeof(res) === "string")
        return [r1, res, res];
    else
        return [r1, res[0], res[1]];
}