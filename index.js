// Get the error message element.
const errorMsg = document.querySelector('.error-message');
// Get the email input field element.
const inputEmail =document.querySelector('.email-input');
// get the body image element
const bodyImage = document.getElementById('body-img');
// get the button
const btn = document.getElementById('submit-btn'); 



// change the body image of the web app on mobile devices and when the screen sizes are slowly reduced to mobile screen sizes and vice versa.

window.addEventListener('resize', function(){
    if (window.innerWidth < 375) {
        bodyImage.src = "./assets/images/illustration-sign-up-mobile.svg";
    }else{
        bodyImage.src = "./assets/images/illustration-sign-up-desktop.svg";
    }
});

window.addEventListener('load', function(){
    if (window.innerWidth < 375) {
        bodyImage.src = "./assets/images/illustration-sign-up-mobile.svg";
    }else{
        bodyImage.src = "./assets/images/illustration-sign-up-desktop.svg";
    }
});

// code for checking the email input format and display of the required success or error message

  inputEmail.addEventListener('blur', function() {
    const email = inputEmail.value;
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
        errorMsg.style.display = 'block';
        inputEmail.style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
        inputEmail.style.borderColor ='rgba(255, 0, 0, 0.2)';
    }else if (!regex.test(email)) {
        errorMsg.style.display = 'block';
        inputEmail.style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
        inputEmail.style.color = 'red';
        inputEmail.style.borderColor ='rgba(255, 0, 0, 0.2)';
    }else{
    errorMsg.style.display = 'none';
        window.location.href = './success.html';
      
};

});



