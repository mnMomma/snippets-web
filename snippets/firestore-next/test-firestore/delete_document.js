// This snippet file was generated by processing the source file:
// snippets/firestore-next/test-firestore/delete_document.js
//
// To make edits to the snippets in this file, please edit the source

// [START modular_delete_document]
import { collection, doc, deleteDoc } from "firebase/firestore";

await deleteDoc(doc(collection(db, "cities"), "DC"));
// [END modular_delete_document]