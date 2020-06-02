let resetBtn = document.getElementById('reset-btn');
let boxes = document.querySelectorAll('input[type=checkbox');
let boxCount = JSON.parse(localStorage.getItem('boxCount'));
let pastSession = (boxCount > 1);

let loginWindow = document.getElementById('login-window');
let pwInput = document.getElementById('password');
let errorMsg = document.getElementById('error-msg');
let submitBtn = document.getElementById('submit-btn');
let authorized = sessionStorage.getItem('auth-status');
if(authorized) {
    loginWindow.classList.add('invisible');
    console.log('authorized');
}

submitBtn.addEventListener('click', () => {
    let pw = pwInput.value;
    console.log(pw);
    pwInput.value = '';
    if(pw === 'Ebony99!') {
        loginWindow.classList.add('invisible');
        sessionStorage.setItem('auth-status', "true");
    } else {
        errorMsg.classList.remove('invisible');
    }
})

// initialize checkbox IDs and localStorage records
if(pastSession) {
    let boxCount = 1;

    boxes.forEach(box => {
        box.id = `box-${boxCount}`;
        box.checked = JSON.parse(localStorage.getItem(`${box.id}`));

        box.addEventListener('change', (e) => {
            localStorage.setItem(`${e.srcElement.id}`, JSON.stringify(e.srcElement.checked));
            console.log(e.srcElement.id);
        });
        boxCount++;
    });
} else {
    let boxCount = 1;
    localStorage.setItem('boxCount', JSON.stringify(boxCount));

    boxes.forEach(box => {
        box.id = `box-${boxCount}`;
        
        localStorage.setItem(`${box.id}`, JSON.stringify(box.checked));

        box.addEventListener('change', (e) => {
            localStorage.setItem(`${e.srcElement.id}`, JSON.stringify(e.srcElement.checked));
            console.log(e.srcElement.id);
        });
        boxCount++;
        localStorage.setItem('boxCount', JSON.stringify(boxCount));
    });
}

// clear localStorage data and refresh page (to re-initialize 'boxes') when reset-btn clicked
resetBtn.addEventListener('click', () => {
    if(confirm("Are you sure you want to delete your data?")) {
        localStorage.clear();
        sessionStorage.clear();
        location.reload();
    }
});





