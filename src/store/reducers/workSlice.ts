import { createSlice } from "@reduxjs/toolkit";
import { WorkState } from "../types/workState";

const initialState: WorkState = {
  selected: null,
  companies: [
    {
      id: 1,
      company: "WEQ Technologies",
      link: "https://weqtechnologies.com/",
      label: "Android/Flutter Developer",
      period: "Aug 2021 - Present · 1 yr 8 mos",
      description:
        "Flutter: As an experienced Android/Flutter developer, I have worked on integrating payment systems and Google Maps, managing application state using Riverpod, communicating with APIs using Dio, and implementing push notifications and dynamic links.  I understand the importance of configuring application flavors to deliver the right experience to different audiences. I understand the importance of configuring application flavors to deliver the right experience to different audiences.\nAndroid: In my experience, I have used Retrofit for API communication, Hilt for dependency injection, and reactive programming using LiveData and State Flow. Asynchronous operations with Coroutines and offline caching with ORM frameworks like GreenDB and DBFlow are also areas where I have expertise. Additionally, I have implemented file upload/download with Worker and used Firebase for user authentication and data synchronization.",
    },
    {
      id: 2,
      link: "https://www.acropolisinfotech.com/",
      company: "Acropolis",
      label: "Android Developer Intern",
      period: "May 2021 - Jul 2021 · 3 mos",
      description:
        "Worked with Kotlin programming language to write concise, expressive, and type-safe code for Android applications.\nDeveloped data-driven Android app UIs using LiveData, ViewModel, and Data Binding components.\nManaged the app submission and review process to ensure successful publication of Android apps on the Google Play Store, including compliance with app store guidelines and procedures.",
    },
  ],
};

export const workSlice = createSlice({
  name: "work",
  initialState: initialState,
  reducers: {
    setCurrentCompany: (state, action: any) => {
      state.selected = action.payload;
    },
  },
});

export const { setCurrentCompany } = workSlice.actions;
export default workSlice.reducer;
