
const images = [
    {'id': '1', 'url':'./IMG/serviços publicos/img1.png'},
    {'id': '2', 'url':'./IMG/serviços publicos/img2.png'},
    {'id': '3', 'url':'./IMG/serviços publicos/img3.png'},
    {'id': '4', 'url':'./IMG/serviços publicos/img4.png'},
    {'id': '5', 'url':'./IMG/serviços publicos/img5.png'},
]

const containerItems = document.querySelector('#container-items');

const loadImages = (images, container) => {
        images.forEach (image =>{
            container.innerHTML += `
            <div class='item'>
            <img src='${image.url}'
            </div>
        `
        })
}

loadImages (images, containerItems);

let items = document.querySelectorAll('.item');

const previous = () =>{
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore (lastItem, items[1]);
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector ('#next').addEventListener('click', next);