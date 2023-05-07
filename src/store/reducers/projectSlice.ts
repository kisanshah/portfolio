import { createSlice } from "@reduxjs/toolkit";
import { Project } from "../types/project";

const initialState: Project[] = [
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-3f94f.appspot.com/o/projects%2Fthumbnail%2Fcoachvikram.png?alt=media&token=3d739c56-01fa-4509-8e75-e1a96896dd45",
    title: "Coach Vikram",
    description:
      "This App is designed to help corporate professionals enhance their personal and professional skills through targeted training modules.",
    android: "",
    ios: "",
    github: "",
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-3f94f.appspot.com/o/projects%2Fthumbnail%2Fdealabhi.png?alt=media&token=dab7ee16-a627-4a6d-afce-9e89e6dcd6f5",
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
      "https://firebasestorage.googleapis.com/v0/b/portfolio-3f94f.appspot.com/o/projects%2Fthumbnail%2Fdyd.png?alt=media&token=5ea23639-c54a-4968-b677-89d0db3d0ec8",
    title: "DYD",
    description:
      "DYD app has been meticulously designed to provide the best-in-class car services. Each car deserves personal attention when it comes to servicing.",
    android: "https://play.google.com/store/apps/details?id=com.dyd.customer",
    ios: "https://apps.apple.com/us/app/dyd-doorstep-car-services/id1641727889",
    github: "",
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-3f94f.appspot.com/o/projects%2Fthumbnail%2Ffinwill.png?alt=media&token=65fcb808-58fc-4eb8-8c32-cfa2db16385a",
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
