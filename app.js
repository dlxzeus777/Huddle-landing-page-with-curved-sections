const subscribe = document.querySelector('.subscribe');
const emailInput = document.querySelector('.email-input');
const check = document.querySelector('.check');

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

subscribe.addEventListener('click', () => 
{
    if(validateEmail(emailInput.value))
    {
        check.classList.remove('hidden');
        check.innerHTML = `You've successfully subscribed to our newsletter!`;
        check.style.color = 'green';
    }
    else{
        check.classList.remove('hidden');
        check.innerHTML = 'Check your email please!';
    }
    setTimeout(() => {
        check.classList.add('hidden')
        emailInput.style.border = 'none';
        
    }, 2000);
})
