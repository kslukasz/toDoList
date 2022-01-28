const buttonAdd = document.querySelector(".add");
const buttonDel = document.querySelector(".delete");
const buttonEdit = document.querySelector(".edit")
const input2 = document.querySelector(".search");
const ul1 = document.querySelector("ul");
let liElements = [];

function show() {
    liElements.forEach((el, i) => {
        el.dataset.key = i;
        ul1.appendChild(el);
    });
}

function addLi() {
    const input = document.querySelector(".input1");
    if ((input.value).trim() != "") {
        const li1 = document.createElement("li");
        li1.textContent = input.value;
        input.value = "";
        li1.addEventListener("click", (e) => {
            const index = li1.dataset.key;
            li1.classList.toggle("th");
            ul1.textContent = "";
            show();
        });
        const span = document.createElement("span");
        span.textContent = 'X';
        span.classList.add("span1");
        li1.appendChild(span);
        span.addEventListener("click", (ev) => {
            // span.classList.remove("th");
            const index = li1.dataset.key;
            liElements.splice(index, 1);
            ul1.textContent = "";
            show();          
        })       
        liElements.push(li1);
        show();
    }
}

function deleteEl(ev) {    
    for (let i = liElements.length - 1; i >= 0; i--) {
        if (ev[i].classList == "th") {
            liElements.splice(i, 1);           
            ul1.textContent = "";
        }
    }
    show();
}

function filter(e) {
    const inp = e.target.value.toLowerCase();
    let tabLi = liElements;
    tabLi = tabLi.filter(li => li.textContent.toLowerCase().includes(inp));
    ul1.textContent = "";
    tabLi.forEach((li) => {
        ul1.appendChild(li);
    });
}
buttonAdd.addEventListener("click", addLi);
buttonDel.addEventListener("click", () => {
    if (liElements) {
        deleteEl(liElements);
        
    }
});
input2.addEventListener("input", filter);