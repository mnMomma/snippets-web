// This snippet file was generated by processing the source file:
// snippets/firestore-next/test-firestore/fs_setup_cache.js
//
// To make edits to the snippets in this file, please edit the source

// [START modular_fs_setup_cache]
import { initializeFirestore, CACHE_SIZE_UNLIMITED } from "firebase/firestore";

const firestoreDb = initializeFirestore(app, {
  cacheSizeBytes: CACHE_SIZE_UNLIMITED
});
// [END modular_fs_setup_cache]