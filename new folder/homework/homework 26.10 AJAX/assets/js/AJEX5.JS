(() => {
  const button = document.getElementById("button");
  button.addEventListener("click", async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos`);
    const photos = await response.json();
    const output = document.getElementById("output");

    // Create a Higher-Order Function to filter the first 100 photos
    const getFirst100Photos = (photo, index) => index < 100;

    // Use the filter HOF to get the first 100 photos
    const first100Photos = photos.filter(getFirst100Photos);

    // Display the information of the first 100 photos
    first100Photos.forEach((photo) => {
      output.innerHTML += `
       <p>Album ID: ${photo.albumId}</p>
       <p>Photo ID: ${photo.id}</p>
       <p>Title: ${photo.title}</p>
       <img src = "${photo.thumbnailUrl}">
       <hr>
     `;
    });
  });
})();
