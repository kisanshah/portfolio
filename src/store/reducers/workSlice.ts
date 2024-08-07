import { createSlice } from "@reduxjs/toolkit";
import { WorkState } from "../types/workState";

const initialState: WorkState = {
  selected: null,
  companies: [
    {
      id: 1,
      company: "Blackcurrant Labs",
      link: "https://blackcurrantlabs.com/",
      label: "Full Stack Developer",
      period: "Aug 2023 - Present",
      description:
        "I have extensive experience as a Full Stack Developer, working with Angular, Node.js, Sequelize, TypeORM, and sockets. My expertise includes building real-time applications, such as a trading app, where I implemented sockets for live data updates and real-time interactions. I have also utilized Sequelize and TypeORM for efficient database management and integrated server-side rendering (SSR) to enhance performance and SEO for web applications.\nIn my role, I have consistently delivered high-quality, scalable solutions by leveraging these technologies. My ability to work on both the frontend and backend, coupled with my experience in real-time communication and performance optimization, allows me to create seamless, responsive applications that meet modern web standards and user expectations.",
    },
    {
      id: 2,
      company: "WEQ Technologies",
      link: "https://weqtechnologies.com/",
      label: "Android/Flutter Developer",
      period: "Aug 2021 - Jul 2023 · 2 yr",
      description:
        "Flutter: As an experienced Android/Flutter developer, I have worked on integrating payment systems and Google Maps, managing application state using Riverpod, communicating with APIs using Dio, and implementing push notifications and dynamic links.  I understand the importance of configuring application flavors to deliver the right experience to different audiences. I understand the importance of configuring application flavors to deliver the right experience to different audiences.\nAndroid: In my experience, I have used Retrofit for API communication, Hilt for dependency injection, and reactive programming using LiveData and State Flow. Asynchronous operations with Coroutines and offline caching with ORM frameworks like GreenDB and DBFlow are also areas where I have expertise. Additionally, I have implemented file upload/download with Worker and used Firebase for user authentication and data synchronization.",
    },
    {
      id: 3,
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
