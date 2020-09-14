// This snippet file was generated by processing the source file:
// snippets/firestore-next/test-firestore/set_custom_object.js
//
// To make edits to the snippets in this file, please edit the source

// [START modular_set_custom_object]
import { doc, collection, setDoc } from "firebase/firestore"; 

// Set with cityConverter
const ref = doc(collection(db, "cities"), "LA").withConverter(cityConverter);
await setDoc(ref, new City("Los Angeles", "CA", "USA"));
// [END modular_set_custom_object]