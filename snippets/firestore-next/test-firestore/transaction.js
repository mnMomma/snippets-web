// This snippet file was generated by processing the source file:
// snippets/firestore-next/test-firestore/transaction.js
//
// To make edits to the snippets in this file, please edit the source

// [START modular_transaction]
import { runTransaction } from "firebase/firestore";

try {
  await runTransaction(db, async (transaction) => {
    const sfDoc = await transaction.get(sfDocRef);
    if (!sfDoc.exists()) {
      throw "Document does not exist!";
    }

    const newPopulation = sfDoc.data().population + 1;
    transaction.update(sfDocRef, { population: newPopulation });
  });
  console.log("Transaction successfully committed!");
} catch (e) {
  console.log("Transaction failed: ", e);
}
// [END modular_transaction]