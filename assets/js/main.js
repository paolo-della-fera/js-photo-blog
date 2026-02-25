/* 

<div class="col">
    <div class="card">
        <img class="pin" src="./assets/img/pin.svg" alt="">

        <img src="https://marcolanci.it/boolean/assets/pictures/1.png" class="card-img-top" alt="...">

        <div class="card-body">
            <p class="card-text text-secondary">date</p>
            <h2 class="card-title fw-bold">Title</h2>
        </div>
    </div>
</div>

*/




// take the API and save in a variable 
const endpoint = 'https://lanciweb.github.io/demo/api/pictures/'


// take the DOM node 
const rowEl = document.querySelector('.row');
// console.log(endpoint, rowEl);




fetch(endpoint)
    .then(res => res.json())
    .then(data => {
        // console.log(data)

        data.forEach(element => {
            // console.log(element)
            const { title, date, url } = element
            // console.log(title, date, url)

            // create the marckup
            const marckup = `
                <div class="col">
                    <div class="card mt-3">
                        <img class="pin" src="./assets/img/pin.svg" alt="">

                        <img src="${url}" class="card-img-top" alt="...">

                        <div class="card-body">
                        <p class="card-text text-secondary">${date}</p>
                        <h2 class="card-title fw-bold">${title.toUpperCase()}</h2>
                        </div>
                    </div>
                </div>
            `

            // print all in page
            rowEl.innerHTML += marckup
        });
    })