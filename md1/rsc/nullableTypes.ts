{
  // Nullable Types
  const SearchThing = (value: string | null) => {
    if (value) {
      console.log("searching");
    } else {
      console.log("there is nothing to search");
    }
  };
  SearchThing(null);

  //   Unknown Types
  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value == "number") {
      const getResult = ((value * 1000) / 3600).toFixed(2);
      console.log(`The speed is: ${getResult} ms^-1`);
    } else if (typeof value == "string") {
      const [result, unit] = value.split(" ");
      const getResult = ((parseFloat(result) * 1000) / 3600).toFixed(2);
      console.log(`The speed is: ${getResult} ms^-1`);
    } else {
      console.log("wrong Input");
    }
  };
  getSpeedInMeterPerSecond("1000");

  // Never type

  const ThrowError = (msg: string) => {
    throw new Error(msg);
  };
  ThrowError("Unexpected");
}
