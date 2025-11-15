import { account, ID, tablesDB, avatars } from "./config";
import type { NewAccountResponse } from "../../types/types";

export async function createNewAccount({
  email,
  password,
  name,
}: {
  email: string;
  password: string;
  name: string;
}) {
  const newAccount = await account.create<NewAccountResponse>({
    userId: ID.unique(),
    email,
    password,
    name,
  });

  const avatarURL = avatars.getInitials(newAccount.name);

  return await saveUserToDatabase({
    accountID: newAccount.$id,
    name: newAccount.name,
    email: newAccount.email,
    imageURL: avatarURL,
  });
}

export async function saveUserToDatabase(accountData: {
  accountID: string;
  name: string;
  email: string;
  imageURL: string;
}) {
  const newUser = await tablesDB.createRow({
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    tableId: import.meta.env.VITE_APPWRITE_USERS_TABLE_ID,
    rowId: ID.unique(),
    data: accountData,
  });
  return newUser;
}

export async function accountLogin({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const res = await account.createEmailPasswordSession({
    email,
    password,
  });
  return res;
}

export async function accountLogout() {
  const session = await account.getSession({ sessionId: "current" });
  console.log(session);
  return await account.deleteSession({ sessionId: session.$id });
}
