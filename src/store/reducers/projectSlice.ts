import { createSlice } from "@reduxjs/toolkit";
import { Project } from "../types/project";

const initialState: Project[] = [
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-3f94f.appspot.com/o/projects%2Fthumbnail%2Fcoachvikram.png?alt=media&token=ae5f75ea-f3e1-4e6d-a99d-d7b40c709790",
    title: "Coach Vikram",
    description:
      "This App is designed to help corporate professionals enhance their personal and professional skills through targeted training modules.",
    android: "",
    ios: "",
    github: "",
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-3f94f.appspot.com/o/projects%2Fthumbnail%2Fdealabhi.png?alt=media&token=a64f7e85-eae5-4b35-8a72-89237b4e73da",
    title: "Deal Abhi Partner",
    description:
      "This app is your one stop solution to enlist your products & sell them through our platform.",
    android:
      "https://play.google.com/store/apps/details?id=com.app.dealAbhi.partner",
    ios: "https://apps.apple.com/in/app/dealabhi-partner/id1662340857",
    github: "",
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-3f94f.appspot.com/o/projects%2Fthumbnail%2Fdyd.png?alt=media&token=1b71a7b7-3fbc-41f4-bfce-98ff5e4ce421",
    title: "DYD",
    description:
      "DYD app has been meticulously designed to provide the best-in-class car services. Each car deserves personal attention when it comes to servicing.",
    android: "https://play.google.com/store/apps/details?id=com.dyd.customer",
    ios: "https://apps.apple.com/us/app/dyd-doorstep-car-services/id1641727889",
    github: "",
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-3f94f.appspot.com/o/projects%2Fthumbnail%2Ffinwill.png?alt=media&token=f314bd26-8f14-476f-8f13-13f470ef95d5",
    title: "Finwill",
    description:
      "A Practice Management Software Solution for Compliance Controls & Work Management",
    android: "https://play.google.com/store/apps/details?id=com.weq.finwill",
    ios: "",
    github: "",
  },
];

export const projectSlice = createSlice({
  name: "project",
  initialState: initialState,
  reducers: {},
});

export default projectSlice.reducer;
