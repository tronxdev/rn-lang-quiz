# React Native Firebase Quiz App

This is a React Native quiz application that uses Firebase to store and retrieve questions. Users can answer questions, and the app checks if their answers are correct.

## Table of Contents

- [React Native Firebase Quiz App](#react-native-firebase-quiz-app)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
    - [`npm start`](#npm-start)
  - [Features](#features)
  - [Usage](#usage)
  - [Folder Structure](#folder-structure)
  - [Firebase Configuration](#firebase-configuration)

## Installation

Before running the app, make sure you have React Native set up on your system. You can find installation instructions for React Native in the [official documentation](https://reactnative.dev/docs/environment-setup).

1. Clone the repository:

2. Install project dependencies:

3. Configure Firebase:

-   Create a Firebase project on the [Firebase Console](https://console.firebase.google.com/).
-   Set up Firebase Authentication and Firestore for your project.
-   Create an iOS and Android app in your Firebase project and download the configuration files.
-   Replace the Firebase configuration in the `firebase/firebase.ts` file with your own.

4. Run the app:

### `npm start`

## Features

-   Answer questions and check if the answer is correct.
-   Navigate through exercises and questions.
-   Modal for feedback on answers.
-   Loading screen while fetching questions from Firebase.

## Usage

-   Start the app on an Android or iOS simulator/emulator or a physical device.
-   Answer the questions presented in the app.
-   Check your answers by clicking "Check Answer."
-   The app will provide feedback on whether your answer is correct or not.
-   Navigate through exercises and questions using the "Continue" button.
-   If you complete all exercises, you'll see a "Thanks for playing" message.

## Folder Structure

-   `components/`: Contains reusable components used in the app.
-   `firebase/`: Contains Firebase configuration and initialization.
-   `screens/`: Contains the main screens of the app.
-   `App.tsx`: Entry point of the application.
-   `...`: Other project files and configurations.

## Firebase Configuration

Replace the Firebase configuration in `firebase/firebase.ts` with your own Firebase configuration obtained from the Firebase Console.

```javascript
// src/firebase/firebase.ts

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

### export { db };
```
