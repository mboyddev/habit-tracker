
let boxes = document.querySelectorAll('input[type=checkbox');
let boxCount = JSON.parse(localStorage.getItem('boxCount'));
let pastSession = (boxCount > 1);

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



