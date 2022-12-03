// fetch('demo.json')
//     .then(res => {
//         console.log(res);
//         return res.json();
//     })
//     .then(json => console.log(json));

// fetch('https://unsplash.it/600/400')
//     .then(res => res.blob())
//     .then(blob => {
//         let img = document.createElement('img');
//         img.src = URL.createObjectURL(blob);
//         document.querySelector('body').appendChild(img);
//     });


const postSection = document.querySelector('#posts');
const postTemplate = document.querySelector('#post-template');

async function getData() {
  const postStream = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await postStream.json();
  let i = 0;

  posts.forEach((post) => {
    i++;
    if (i < 10) {
      fetch('https://unsplash.it/300/200')
        .then((res) => res.blob())
        .then((blob) => {
          const title = post.title;
          const body = post.body;
          const newPost = document.importNode(postTemplate.content, true);
          const postTitle = newPost.querySelector('.post__title');
          const postBody = newPost.querySelector('.post__body');
          const postImage = newPost.querySelector('.post__img');

 
          postImage.src = URL.createObjectURL(blob);
          postTitle.innerText = title;
          postBody.innerText = body;

          postSection.appendChild(newPost);
        })
        .catch((err) => console.error(err));
    }
  });
}

getData().catch((err) => console.error(err));