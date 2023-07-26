const wrapper =  document.querySelector('.wrapper');

function getPost () {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(responce => responce.json())
    .then(json => {
        json.forEach((element) => {
            console.log(element.title);
            console.log(element.body);
            const box = document.querySelector('div');
            box.classList.add('box_post');
            box.innerHTML = `
            <div class="title">${element.title}</div>
            <div class="text">${element.body}</div>
            `;
            wrapper.appendChild(box);
        });
    })
    .catch((err) => {
        console.log('Error' + err)
    })

}

getPost();