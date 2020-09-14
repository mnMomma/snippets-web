// This snippet file was generated by processing the source file:
// snippets/firestore-next/test-solution-counters/create_counter.js
//
// To make edits to the snippets in this file, please edit the source

// [START modular_create_counter]
function createCounter(ref, num_shards) {
    import { collection, doc, writeBatch } from "firebase/firestore";

    const batch = writeBatch(db);

    // Initialize the counter document
    batch.set(ref, { num_shards: num_shards });

    // Initialize each shard with count=0
    for (let i = 0; i < num_shards; i++) {
        const shardRef = doc(collection(ref, 'shards'), i.toString());
        batch.set(shardRef, { count: 0 });
    }

    // Commit the write batch
    return batch.commit();
}
// [END modular_create_counter]