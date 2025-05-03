const bro1: string[] = ["maruf", "rezwan", "Safwan", "zakwan"];
const bro2: string[] = ["maruf2", "rezwan2", "Safwan2", "zakwan2"];
bro1.push(...bro2);

const mentors = {
  ts: "nahid",
  crc: "maruf",
  football: "zihad",
};

const mentors2 = {
  pess: "marzan",
  movie: "yousuf",
  tention: "shaon",
};

const mentorList = {
  ...mentors,
  ...mentors2,
};
