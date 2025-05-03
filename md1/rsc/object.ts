// Reference type -------- Object

const user: {
  readonly company: "programming Hero"; //-------> literal types
  firstName: string;
  middleName?: string; // the symbol ? means it's optional
  lastName: string;
} = {
  company: "programming Hero",
  firstName: "Mohammad",
  //   middleName: "Hamza",
  lastName: "Chowdhury",
};
