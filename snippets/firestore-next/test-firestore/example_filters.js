// This snippet file was generated by processing the source file:
// snippets/firestore-next/test-firestore/example_filters.js
//
// To make edits to the snippets in this file, please edit the source

// [START modular_example_filters]
const q1 =  query(citiesRef, where("state", "==", "CA"));
const q2 =  query(citiesRef, where("population", "<", 100000));
const q3 =  query(citiesRef, where("name", ">=", "San Francisco"));
// [END modular_example_filters]