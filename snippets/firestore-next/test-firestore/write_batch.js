// This snippet file was generated by processing the source file:
// snippets/firestore-next/test-firestore/write_batch.js
//
// To make edits to the snippets in this file, please edit the source

// [START modular_write_batch]
import { writeBatch, doc, collection } from "firebase/firestore"; 

// Get a new write batch
const batch = writeBatch(db);

// Set the value of 'NYC'
const nycRef = doc(collection(db, "cities"), "NYC");
batch.set(nycRef, {name: "New York City"});

// Update the population of 'SF'
const sfRef = doc(collection(db, "cities"), "SF");
batch.update(sfRef, {"population": 1000000});

// Delete the city 'LA'
const laRef = doc(collection(db, "cities"), "LA");
batch.delete(laRef);

// Commit the batch
await batch.commit();
// [END modular_write_batch]