{
  // Promise in typescript

  const createPromise = (): Promise<{ Something: string }> => {
    return new Promise<{ Something: string }>((resolve, reject) => {
      const data: { Something: string } = { Something: "something" };
      if (data) {
        resolve(data);
      } else {
        reject("failed to load data");
      }
    });
  };

  //   calling Promise
  const showData = async (): Promise<{ Something: string }> => {
    const data: { Something: string } = await createPromise();
    return data;
  };
  showData();
}
