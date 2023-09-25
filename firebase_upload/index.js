const admin = require("firebase-admin");
const fs = require("fs");
const path = require("path");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const jsonDirectory = "./json"; // Specify the relative path to the directory where your JSON files are located

fs.readdir(jsonDirectory, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  files.forEach((file) => {
    if (file.endsWith(".json")) {
      const filePath = path.join(__dirname, jsonDirectory, file);
      const collectionName = path.parse(file).name; // Use the file name (excluding extension) as the collection name

      // Read the JSON file
      const jsonData = require(filePath);

      jsonData.forEach((data) => {
        const collectionRef = db.collection(collectionName);

        collectionRef
          .add(data)
          .then((docRef) => {
            console.log(
              `Document written with ID in collection '${collectionName}': ${docRef.id}`
            );
          })
          .catch((error) => {
            console.error(
              `Error adding document to collection '${collectionName}':`,
              error
            );
          });
      });
    }
  });
});
