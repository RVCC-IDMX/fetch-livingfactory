fetch('demo.json')
    .then(res => {
        console.log(res);
        return res.json();
    })
    .then(json => console.log(json));
