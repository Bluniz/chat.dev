import { database } from "./firebase";

export async function getUser(db, id) {
  const { ref, get, child } = database;
  const dbRef = ref(db);
  const workspaceRef = `workspace/${id}`;

  const snapshot = await get(child(dbRef, workspaceRef));

  if (snapshot.exists()) {
    return snapshot.val();
  } else {
    throw new Error("User not exists");
  }
}
