# Firebase Firestore Data Import Script

This script is designed to read JSON files from a specified directory and add the data from these files to Firebase Firestore collections. The script uses Firebase Admin SDK for authentication and database access.

## Prerequisites

Before using this script, ensure that you have the following prerequisites in place:

1. **Firebase Admin SDK Configuration**: You must have the Firebase Admin SDK configuration file (`serviceAccountKey.json`) for your Firebase project. This file should be placed in the same directory as the script.

2. **Node.js**: This script is intended to be run with Node.js. Make sure you have Node.js installed on your system.

## Usage

1. **Directory Structure**: The script expects JSON files to be located in a directory named "json" within the same directory as the script. Ensure that your JSON files are present in this directory.

2. **Install Dependencies**: If you haven't already, install the required Node.js modules by running the following command in the same directory as the script:

    ```shell
    npm install firebase-admin
    ```

3. **Run Script**:

### `node index.js`
