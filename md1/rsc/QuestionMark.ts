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

  type User = {
    name: string;
    address: {
      city: string;
      presentAddress?: string;
      parmanentAddress?: string;
    };
  };
  const user: User = {
    name: "Mohamamad Mohsin",
    address: {
      city: "sylhet",
      presentAddress: "uposhohor",
    },
  };
  const parmanentAddress: string =
    user?.address?.parmanentAddress ?? "There is no parmanent Address";
  console.log(parmanentAddress);
}
