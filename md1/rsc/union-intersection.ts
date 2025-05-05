// intersection

type FrontendDeveloper = {
  skills: string[];
  designation1: "frontendDeveloper";
};

type BackendDeveloper = {
  skills: string[];
  designation2: "backendDeveloper";
};

type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

const fullstackDeveloper: FullStackDeveloper = {
  skills: ["html", "css", "express"],
  designation1: "frontendDeveloper",
  designation2: "backendDeveloper",
};

// union

function printId(id: string | number) {
  console.log("Your ID is: " + id);
}

printId(101);
printId("abc");
