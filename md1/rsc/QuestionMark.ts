{
  // we used question mark on different cases. like
  /*
    Ternarry operator
    optional chaining
    nullish coalescing
    */

  // ternary operator

  const age: number = 15;

  const isAdult = age >= 18 ? "adult" : "not Adult";
  //   console.log({ isAdult });

  function returnUndefined(): undefined {
    return undefined;
  }

  // nullish coalescing operator ---------->----
  const isAuthenticated = returnUndefined();
  const result1 = isAuthenticated ?? "guest";
  console.log(result1);
}
