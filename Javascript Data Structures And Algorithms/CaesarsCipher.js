function rot13(str) {
  const a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const b = "NOPQRSTUVWXYZABCDEFGHIJKLM";
  let temp = "";

  str.split("").map((q) => {
    if (!q.match(/[a-z]/gi)) {
      temp += q;
    } else {
      temp += b[a.indexOf(q)];
    }
  });
  return temp;
}

rot13("SERR PBQR PNZC");
