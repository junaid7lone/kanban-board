import { Client, Account, ID, Avatars, Databases, Query } from "appwrite";

const endpoint = process.env.REACT_APP_ENDPOINT;
const platform = process.env.REACT_APP_PLATFORM;
const projectId = process.env.REACT_APP_PROJECTID;
const databaseId = process.env.REACT_APP_DATABASEID;
const usercollectionId = process.env.REACT_APP_USERSCOLLECTIONID;
const boardscollectionId = process.env.REACT_APP_BOARDSCOLLECTIONID;
const listscollectionId = process.env.REACT_APP_LISTSCOLLECTIONID;
const cardscollectionId = process.env.REACT_APP_CARDSCOLLECTIONID;
const tagscollectionId = process.env.REACT_APP_TAGSCOLLECTIONID;

export const client = new Client().setEndpoint(endpoint).setProject(projectId);

export const account = new Account(client);

const avatars = new Avatars(client);
const databases = new Databases(client);

export const createAccount = async ({ email, password, username }) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (!newAccount) throw Error;
    const avatarUrl = avatars.getInitials(username);

    await signIn({ email, password });
    const newUser = await databases.createDocument(
      databaseId,
      userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl,
      }
    );

    return newUser;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

export const signIn = async ({ email, password }) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    throw new Error(error);
  }
};

export const getCurrentUser = async () => {
  try {
    const currentAcc = await account.get();

    if (!currentAcc) {
      // throw Error;
      return null;
    }

    const currentUser = await databases.listDocuments(
      databaseId,
      userCollectionId,
      [Query.equal("accountId", currentAcc.$id)]
    );

    if (!currentUser) {
      throw Error;
    }

    return currentUser.documents[0];
  } catch (error) {
    throw new Error(error);
  }
};

export const getAllPosts = async () => {
  try {
    const posts = await databases.listDocuments(
      databaseId,
      videoCollectionId,
      []
    );
    return posts.documents;
  } catch (error) {
    throw new Error(error);
  }
};

export const getLatestPosts = async () => {
  try {
    const posts = await databases.listDocuments(databaseId, videoCollectionId, [
      Query.orderDesc("$createdAt", Query.limit(7)),
    ]);
    return posts.documents;
  } catch (error) {
    throw new Error(error);
  }
};

export const searchPosts = async (query) => {
  try {
    const posts = await databases.listDocuments(databaseId, videoCollectionId, [
      Query.search("title", query),
    ]);
    return posts.documents;
  } catch (error) {
    throw new Error(error);
  }
};
