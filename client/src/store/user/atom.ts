import {atom} from "recoil";

const userAtom = atom({
  key: "userAtom",
  default: {
    id: undefined,
    email: undefined,
  },
});

export default userAtom;
