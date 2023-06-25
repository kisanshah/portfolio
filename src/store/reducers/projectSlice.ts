import { createSlice } from "@reduxjs/toolkit";
import { Project } from "../types/project";

const initialState: Project[] = [
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-3f94f.appspot.com/o/projects%2Fthumbnail%2Fcoachvikram.webp?alt=media&token=78875088-92a9-4ced-9bd1-783a6e7a2a7a",
    title: "Coach Vikram",
    description:
      "This App is designed to help corporate professionals enhance their personal and professional skills through targeted training modules.",
    android: "",
    ios: "",
    github: "",
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-3f94f.appspot.com/o/projects%2Fthumbnail%2Fdealabhi.webp?alt=media&token=319faaf3-5af8-4aa4-857a-585f3c518af8",
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
      "https://firebasestorage.googleapis.com/v0/b/portfolio-3f94f.appspot.com/o/projects%2Fthumbnail%2Fdyd.webp?alt=media&token=1297df8e-8026-4c2c-9ed9-8f2d6b56c4e9",
    title: "DYD",
    description:
      "DYD app has been meticulously designed to provide the best-in-class car services. Each car deserves personal attention when it comes to servicing.",
    android: "https://play.google.com/store/apps/details?id=com.dyd.customer",
    ios: "https://apps.apple.com/us/app/dyd-doorstep-car-services/id1641727889",
    github: "",
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-3f94f.appspot.com/o/projects%2Fthumbnail%2Ffinwill.webp?alt=media&token=d3a1714d-55d4-40b0-980e-3693e6ec4b65",
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
