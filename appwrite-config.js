const client = new Appwrite.Client();

client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("6a56e2fe00107ee9e192");

const account = new Appwrite.Account(client);
