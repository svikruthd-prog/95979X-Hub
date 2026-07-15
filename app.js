const message = document.getElementById("message");


window.signup = async function () {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    try {

        await account.create(
            Appwrite.ID.unique(),
            email,
            password
        );

        message.innerHTML = "Account Created!";

    } catch (error) {

        message.innerHTML = error.message;

    }

};



window.login = async function () {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    try {

        await account.createEmailPasswordSession(
            email,
            password
        );

        window.location = "dashboard.html";

    } catch (error) {

        message.innerHTML = error.message;

    }

};
