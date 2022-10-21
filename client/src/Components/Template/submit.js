import { uploadAPI } from "../../webAPI/webAPI";

document.getElementById("submitBtn").addEventListener("click", () => {
    let postid = "hejsanBild123";
    console.log("hittar submitbutton")
    let inputElem = document.getElementById("imgfile");
    let file = inputElem.files[0];
    
    // Create new file so we can rename the file
    let blob = file.slice(0, file.size, "image/jpeg");
    newFile = new File([blob], `${postid}_post.jpeg`, { type: "image/jpeg" });
    
    // Build the form data - You can add other input values to this i.e descriptions, make sure img is appended last
    let formData = new FormData();
    formData.append("imgfile", newFile);
    uploadAPI(formData).then((res) => res.text()).then((x) => console.log(x));
      //.then(loadPosts());
  });
  // Loads the posts on page load

  /*
  function loadPosts() {
    fetch("/upload")
      .then((res) => res.json())
      .then((x) => {
        for (y = 0; y < x[0].length; y++) {
          console.log(x[0][y]);
          const newimg = document.createElement("img");
          newimg.setAttribute(
            "src",
            "https://storage.googleapis.com/dansstorage/" + x[0][y].id
          );
          newimg.setAttribute("width", 50);
          newimg.setAttribute("height", 50);
          document.getElementById("images").appendChild(newimg);
        }
      });
  }*/