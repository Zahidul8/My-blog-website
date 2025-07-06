function myFunction () {
    const message = document.getElementById('demo');
    const inputValue = document.querySelector('.values');
    const email = inputValue.value.trim();

     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

     if (email === "") {
        message.innerHTML = "This field is required!";
        message.style.display = "block";
        message.style.color = "red";
     } else if (!emailRegex.test(email)) {
        message.innerHTML = "Please enter a valid email address!";
        message.style.display = "block";
        message.style.color = "red";
     } else {
        message.innerHTML = "Thanks for subscribing.";
        message.style.display = "block";
        message.style.color = "green";

     }

     inputValue.value = "";
}
