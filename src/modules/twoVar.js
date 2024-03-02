const det = (mat) => {
  let val = mat[0][0] * mat[1][1] - mat[0][1] * mat[1][0];
  return val;
};

export const twoVar = (a1, b1, c1, a2, b2, c2) => {
  let del = [
    [a1, b1],
    [a2, b2],
  ];
  let delx = [
    [c1, b1],
    [c2, b2],
  ];
  let dely = [
    [a1, c1],
    [a2, c2],
  ];

  let vDel = det(del);
  let vDelx = det(delx);
  let vDely = det(dely);

  if (vDel === 0) {
    if (vDelx === 0 && vDely === 0) {
      return ["Infinitely many solutions", "Infinitely many solutions"];
    } else {
      return ["No solution", "No solution"];
    }
  } else {
    return [vDelx / vDel, vDely / vDel];
  }
};
