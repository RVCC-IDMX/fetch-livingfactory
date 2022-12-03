// fetch('demo.json')
//     .then(res => {
//         console.log(res);
//         return res.json();
//     })
//     .then(json => console.log(json));

fetch('https://unsplash.it/600/400')
    .then(res => res.blob())
    .then(blob => {
        let img = document.createElement('img');
        img.src = URL.createObjectURL(blob);
        document.querySelector('body').appendChild(img);
    });