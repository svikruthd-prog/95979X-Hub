const message = document.getElementById("message");


window.signup = async function () {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    const { data, error } = await supabaseClient.auth.signUp({
        email: email,
        password: password
    });


    if (error) {

        message.innerHTML = error.message;

    } else {

        message.innerHTML = "Account Created!";

    }

};



window.login = async function () {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password
    });


    if (error) {

        message.innerHTML = error.message;

    } else {

        window.location = "dashboard.html";

    }

};
