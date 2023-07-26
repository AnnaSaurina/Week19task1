const wrapper =  document.querySelector('.wrapper');

function getPost () {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            json.forEach((element) => {
                console.log(element.title);
                console.log(element.body);
                const box = document.createElement('div');
                box.classList.add('box_post');
                box.innerHTML = `
                <div class="title">Title${element.title}</div>
                <div class="text">Text${element.body}</div>
                `;
                wrapper.appendChild(box);
            });
        })
        .catch((err) => {
            console.log('Error' + err)
        })

}

getPost();