const det = (mat) => {
  let val =
    mat[0][0] * (mat[1][1] * mat[2][2] - mat[1][2] * mat[2][1]) -
    mat[0][1] * (mat[1][0] * mat[2][2] - mat[1][2] * mat[2][0]) +
    mat[0][2] * (mat[1][0] * mat[2][1] - mat[2][0] * mat[1][1]);
    console.log(val);
  return val;
};

export const threeVar = (a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3) => {
  let del = [
    [a1, b1, c1],
    [a2, b2, c2],
    [a3, b3, c3],
  ];
  let delx = [
    [d1, b1, c1],
    [d2, b2, c2],
    [d3, b3, c3],
  ];
  let dely = [
    [a1, d1, c1],
    [a2, d2, c2],
    [a3, d3, c3],
  ];
  let delz = [
    [a1, b1, d1],
    [a2, b2, d2],
    [a3, b3, d3],
  ];

  let vdel = det(del);
  let vdelx = det(delx);
  let vdely = det(dely);
  let vdelz = det(delz);

  if (vdel === 0) {
    if (vdelx === 0 && vdely === 0 && vdelz === 0) {
      console.log("infinite solutions");
      return [
        "Infinitely many solutions",
        "Infinitely many solutions",
        "Infinitely many solutions",
      ];
    } else {
      console.log("no solutions");
      return ["No solution", "No solution", "No solution"];
    }
  } else {
    console.log(vdel, vdelx, vdely, vdelz);
    return [vdelx / vdel, vdely / vdel, vdelz / vdel];
  }
};
