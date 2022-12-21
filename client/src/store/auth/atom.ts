import {atom} from "recoil";

const authAtom = atom({
  key: "authAtom",
  default: {
    isAuth: false,
    isLoading: true,
    token: undefined,
  },
});

export default authAtom;
