// const btn1 = document.getElementById('btn1');
// const btn2 = document.getElementById('btn2');
// const message = document.getElementById('message');
//
// btn2.addEventListener('click', (e) => {
    // message.innerText = "Hello world";
// });
//
btn1.addEventListener('click', () => {
    const color = ["red","green","blue"];
    const container = document.getElementById('container');
    color.forEach(color => {
        const box = document.createElement('div');
        box.textContent = `This is ${color} box`;
        box.style.backgroundColor = `${color}`;
        box.style.padding = "12px"
        container.appendChild(box);
    });
    document.body.appendChild(div);
});
