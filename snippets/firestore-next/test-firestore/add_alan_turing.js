// This snippet file was generated by processing the source file:
// snippets/firestore-next/test-firestore/add_alan_turing.js
//
// To make edits to the snippets in this file, please edit the source

// [START modular_add_alan_turing]
// Add a second document with a generated ID.
import { addDoc, collection } from "firebase/firestore"; 

try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Alan",
    middle: "Mathison",
    last: "Turing",
    born: 1912
  });

  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
// [END modular_add_alan_turing]