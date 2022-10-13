
const containerDiv = document.querySelector(".container")

/**
 * Fetches Images from lorem.picsum
 * @param count {number}
 * @param page {number}
 */
function getImages(count = 10, page = 1) {
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=${count}`)
        .then(function (result) {
            result.json().then(renderImages)
        })
}

/**
 *
 * @param images {{author: string, download_url: string}[]}
 */
function renderImages(images) {

    console.log("Images: ", images)

    images.forEach(function (image) {

        const imageDiv = document.createElement("div")
        imageDiv.classList.add("miniature")

        imageDiv.style.backgroundImage = `url("${image.download_url}")`

        containerDiv.appendChild(imageDiv)

    })
}

getImages(12)