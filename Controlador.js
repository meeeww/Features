const responsive = [
    {
        size: 768,
        columns: 2,
    }
];

const items = [
    {
        title: 'Lorem Ipsum',
        body: 'Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.',
        image: 'https://uploads.divjoy.com/undraw-fish_bowl_uu88.svg'
    },
    {
        title: 'Lorem Ipsum',
        body: 'Nunc nulla mauris, laoreet vel cursus lacinia, consectetur sit amet tellus.',
        image: 'https://uploads.divjoy.com/undraw-directions_x53j.svg'
    },
    {
        title: 'Lorem Ipsum',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis, metus et mattis ullamcorper',
        image: 'https://uploads.divjoy.com/undraw-stability_ball_b4ia.svg'
    },
    {
        title: 'Lorem Ipsum',
        body: 'Suspendisse ut tincidunt eros. In velit mi, rhoncus dictum neque a, tincidunt lobortis justo',
        image: 'https://uploads.divjoy.com/undraw-personal_settings_kihd.svg'
    }
];

for (var i = 0; i < items.length; i++) {
    console.log("a")
    const cajasGrid = document.getElementById("cajitasGrid")

    //start div
    let mainDiv = document.createElement("div");
    cajasGrid.appendChild(mainDiv);
    mainDiv.classList.add("caja")

    //elementos
    let img = document.createElement("img");
    mainDiv.appendChild(img);
    img.src = items[i]["image"]
    
    let div = document.createElement("div");
    div.innerHTML = items[i]["title"];
    mainDiv.appendChild(div);
    div.classList.add("titulo")

    div = document.createElement("div");
    div.innerHTML = items[i]["body"];
    mainDiv.appendChild(div);
    div.classList.add("titulo")

}