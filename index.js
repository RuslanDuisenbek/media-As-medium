// let data = [
//   {
//     userId: 1,
//     id: 1,
//     title:
//       "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
//   },
//   {
//     userId: 1,
//     id: 2,
//     title: "qui est esse",
//     body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
//   },
//   {
//     userId: 1,
//     id: 3,
//     title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//     body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
//   },
//   {
//     userId: 1,
//     id: 4,
//     title: "eum et est occaecati",
//     body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
//   },
//   {
//     userId: 1,
//     id: 5,
//     title: "nesciunt quas odio",
//     body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
//   },
// ];

// function loadData() {
//   const spinner = `<div id="spinner" class="spinner-border m-5"></div>`;
//   let container = document.getElementById("container");
//   const new_promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(data), 2000);
//     container.innerHTML += spinner;
//   });
//   new_promise.then((res) => {
//     container.innerHTML = null;
//     const article = `<div class="d-flex justify-content-between m-5">
//         <div class="me-5">
//           <p>Authors name in Topic Names</p>
//           <a href="lecture1\\seminar1.html"><p id="title"></p></a>
//           <p id="summary"></p>
//         </div>
//         <img src="/med-site/assets/Img.png" alt="lptp" />
//       </div>`;
//     const articles = document.getElementById("articles");

//     res.forEach((item) => {
//       let newArticle = article.replace(
//         'id="title">',
//         `id="title">${item.title}`
//       );
//       newArticle = newArticle.replace(
//         'id="summary">',
//         `id="summary">${item.body}`
//       );
//       articles.innerHTML += newArticle;
//     });
//   });
// }
// loadData();
// // const article = `<div class="d-flex justify-content-between m-5">
// //         <div class="me-5">
// //           <p>Authors name in Topic Names</p>
// //           <a href="lecture1\\seminar1.html"><p id="title"></p></a>
// //           <p id="summary"></p>
// //         </div>
// //         <img src="/med-site/assets/Img.png" alt="lptp" />
// //       </div>`;
// // const articles = document.getElementById("articles");

// // data.forEach((item) => {
// //   let newArticle = article.replace('id="title">', `id="title">${item.title}`);
// //   newArticle = newArticle.replace('id="summary">', `id="summary">${item.body}`);
// //   articles.innerHTML += newArticle;
// // });

let arrays = new Object();

function loadData() {
  fetch(
    "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=gD9IU2QvCP1RIM33ArbttgsdVz8WnPkl"
  )
    .then((resp) => resp.json())
    .then((data) => {
      arrays = data.results.slice(0, 7);
      data.results.slice(0, 7).forEach((item) => {
        const newPromis = new Promise((res, rej) => {
          const article = document.querySelector("#articles");
          res(article);
        }).then((article) => {
          article.innerHTML += `
        <div id="container" class="d-flex flex-column m-lg-5 mt-3">
          <div class="d-flex flex-row m-lg-5 mt-3">
            <div id="left">
              <div id="top">
                <p id="author" class="text_author">
                ${item.per_facet} 
                </p>
                <div id="text" class="mt-5 mb-3 d-flex flex-column">
              <h4  class="text_title">
                  ${item.title}
                  </h4>
                  <dl id="desc" class="text_des mt-5">
                   ${item.abstract}
                  </dl>
                </div>
              </div>
              <div id="bttm">
                <p id="bttmText" class="text_bttm">
                   ${item.published_date}
                </p>
              </div>
            </div>
            <img src="./assets/Img.png" alt="" class="img" />
          </div>
        </div>
        `;
          // changePage();
          changePage();
        });
      });
    });
}

async function addHtml() {
  const resp = await fetch(
    "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=gD9IU2QvCP1RIM33ArbttgsdVz8WnPkl"
  );
  const data = await resp.json();
  console.log("data", data.results.slice(0, 7));
  const dataFind = data.results.slice(0, 7).find((p) => {
    // p.title ===
  });
}
addHtml();

loadData();
// function changePage() {
//   const links = document.querySelectorAll(".text_title");
//   for (let i = 0; i < links.length; i++) {
//     links[i].onclick = function () {
//       console.log(links[i].innerText);
//       console.log(arrays.find((val) => val.title === links[i].innerText));
//       // window.location.href = "nextPage.html";

//       const prom = new Promise((resolve, reject) => {
//         const cont = document.querySelectorAll(".container");
//         if (cont) {
//           resolve(cont);
//         } else {
//           reject("Container element not found");
//         }
//       })
//         .then((cont) => {
//           console.log("PLus", cont);
//           cont.innerHTML += `
//         <div class="news d-flex flex-column">
//           <div class="head d-flex flex-row">
//             <img src="./assets/author.png" alt="" />
//             <p class="author ms-0">Authors Name</p>
//             <div class="socials d-flex flex-row">
//               <img src="./assets/LinkedIn.png" alt="" class="lnkd" />
//               <img src="./assets/Facebook Circled.png" alt="" class="fcbk" />
//               <img src="./assets/Twitter.png" alt="" class="twtt" />
//             </div>
//           </div>
//           <div class="bod d-flex flex-column">
//             <p class="tit">7 Practical CSS Tips</p>
//             <p class="descr">
//               How product designers can break from the status quo and help our
//               planet
//             </p>
//             <img
//               src="./assets/NYC_GettyImages-640006562.webp"
//               alt=""
//               class="mt-5 im"
//             />
//             <div class="body_des mt-5">
//               <p class="body_title">Subheader</p>
//               <p class="body_descr">
//                 How long are you awake in the morning before you go online?
//                 Perhaps it’s while you’re still lying in bed, using a news feed
//                 or social media as the needed stimulant to push you out from
//                 under the covers. Or maybe you wait to open your device until
//                 after a warm shower and cup of coffee. If you use sleep tracking
//                 apps, you might say you never signed off in the first place.
//                 And, like millions of others during the pandemic, the internet
//                 is probably what enabled you to stay in touch with family, or
//                 complete entire years of work and/or school remotely. If this
//                 sounds familiar, then you live in a part of the world where an
//                 internet connection now counts as an essential utility — one
//                 that’s as easy to take for granted as the natural gas heating
//                 your shower water or the electricity powering your coffee maker.
//                 But if you think we’re hyperconnected today, just wait.
//                 Globally, just over 55% of today’s households have an internet
//                 connection. This gap between the internet haves and have-nots is
//                 referred to as the digital divide, and access is skewed toward
//                 richer nations. The gap is projected to close in the next decade
//                 as billions of homes connect to the internet for the first time
//                 and by 2030 it’s estimated that the technology industry could
//                 account for 20% of the global electricity demand. This presents
//                 a troublesome dichotomy. On one hand, it supports livelihoods,
//                 educations, and bolsters the global economy; on the other hand,
//                 the increased usage of the apps, websites, and services that we
//                 build will place an even greater strain on our
//                 already-overloaded power grids.
//               </p>
//             </div>
//             <div class="lst_images d-flex flex-row justify-content-between">
//               <div class="d-flex flex-row justify-content-start gap-3">
//                 <div class="d-flex flex-row ms-2">
//                   <img src="./assets/Heart.png" alt="" class="heart" />
//                   <p class="heartsTitle">180</p>
//                 </div>
//                 <div class="d-flex flex-row justify-content-start">
//                   <img src="./assets/Speech Bubble.png" alt="" class="comm" />
//                   <p class="commsDes">12</p>
//                 </div>
//               </div>

//               <img src="./assets/Bookmark.png" alt="" class="bookmark" />
//             </div>
//           </div>
//         </div>
//         `;
//         })
//         .catch((cont) => {
//           console.log("minus", cont);
//         });
//     };
//   }
// }

function changePage() {
  const links = document.querySelectorAll(".text_title");
  for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
      const selectedTitle = links[i].innerText;
      const selectedData = arrays.find((val) => val.title === selectedTitle);

      if (selectedData) {
        // Store the data in localStorage or sessionStorage
        localStorage.setItem("selectedData", JSON.stringify(selectedData));

        // Navigate to the next page
        window.location.href = "nextPage.html";
      }
    };
  }
}

document.addEventListener("DOMContentLoaded", changePage);

document.addEventListener("DOMContentLoaded", () => {
  const timg = document.querySelector("img");
  timg.addEventListener("click", () => {
    window.location.href = "index.html";
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const lnk = document.querySelector(".lnkd");
  lnk.addEventListener("click", () => {
    window.location.href =
      "https://www.linkedin.com/in/rusya-dujsenbek-6753bb278/";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const lnk = document.querySelector(".fcbk");
  lnk.addEventListener("click", () => {
    window.location.href = "https://www.instagram.com/rus_ya4/";
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const lnk = document.querySelector(".twtt");
  lnk.addEventListener("click", () => {
    window.location.href = "https://github.com/RuslanDuisenbek";
  });
});

// function changePage() {
//   console.log("changePage function called");

//   const links = document.querySelectorAll(".text_title");
//   console.log("Number of .text_title elements found:", links.length);

//   for (let i = 0; i < links.length; i++) {
//     links[i].onclick = function () {
//       console.log("Link clicked:", links[i].innerText);

//       // Replace 'arrays' with your actual array variable
//       console.log(arrays.find((val) => val.title === links[i].innerText));
//       // window.location.href = "nextPage.html";

//       const prom = new Promise((resolve, reject) => {
//         const cont = document.querySelector(".container");
//         console.log("Container element found:", cont);

//         if (cont) {
//           resolve(cont);
//         } else {
//           reject("Container element not found");
//         }
//       })
//         .then((cont) => {
//           console.log("Promise resolved:", cont);
//           cont.innerHTML += `
//           <div class="news d-flex flex-column">
//             <div class="head d-flex flex-row">
//               <img src="./assets/author.png" alt="" />
//               <p class="author ms-0">Authors Name</p>
//               <div class="socials d-flex flex-row">
//                 <img src="./assets/LinkedIn.png" alt="" class="lnkd" />
//                 <img src="./assets/Facebook Circled.png" alt="" class="fcbk" />
//                 <img src="./assets/Twitter.png" alt="" class="twtt" />
//               </div>
//             </div>
//             <div class="bod d-flex flex-column">
//               <p class="tit">7 Practical CSS Tips</p>
//               <p class="descr">
//                 How product designers can break from the status quo and help our
//                 planet
//               </p>
//               <img
//                 src="./assets/NYC_GettyImages-640006562.webp"
//                 alt=""
//                 class="mt-5 im"
//               />
//               <div class="body_des mt-5">
//                 <p class="body_title">Subheader</p>
//                 <p class="body_descr">
//                   How long are you awake in the morning before you go online?
//                   Perhaps it’s while you’re still lying in bed, using a news feed
//                   or social media as the needed stimulant to push you out from
//                   under the covers. Or maybe you wait to open your device until
//                   after a warm shower and cup of coffee. If you use sleep tracking
//                   apps, you might say you never signed off in the first place.
//                   And, like millions of others during the pandemic, the internet
//                   is probably what enabled you to stay in touch with family, or
//                   complete entire years of work and/or school remotely. If this
//                   sounds familiar, then you live in a part of the world where an
//                   internet connection now counts as an essential utility — one
//                   that’s as easy to take for granted as the natural gas heating
//                   your shower water or the electricity powering your coffee maker.
//                   But if you think we’re hyperconnected today, just wait.
//                   Globally, just over 55% of today’s households have an internet
//                   connection. This gap between the internet haves and have-nots is
//                   referred to as the digital divide, and access is skewed toward
//                   richer nations. The gap is projected to close in the next decade
//                   as billions of homes connect to the internet for the first time
//                   and by 2030 it’s estimated that the technology industry could
//                   account for 20% of the global electricity demand. This presents
//                   a troublesome dichotomy. On one hand, it supports livelihoods,
//                   educations, and bolsters the global economy; on the other hand,
//                   the increased usage of the apps, websites, and services that we
//                   build will place an even greater strain on our
//                   already-overloaded power grids.
//                 </p>
//               </div>
//               <div class="lst_images d-flex flex-row justify-content-between">
//                 <div class="d-flex flex-row justify-content-start gap-3">
//                   <div class="d-flex flex-row ms-2">
//                     <img src="./assets/Heart.png" alt="" class="heart" />
//                     <p class="heartsTitle">180</p>
//                   </div>
//                   <div class="d-flex flex-row justify-content-start">
//                     <img src="./assets/Speech Bubble.png" alt="" class="comm" />
//                     <p class="commsDes">12</p>
//                   </div>
//                 </div>

//                 <img src="./assets/Bookmark.png" alt="" class="bookmark" />
//               </div>
//             </div>
//           </div>
//         `;
//         })
//         .catch((error) => {
//           console.log("Promise rejected:", error);
//         });
//     };
//   }
// }

// document.addEventListener("DOMContentLoaded", changePage);

fetch(
  "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=gD9IU2QvCP1RIM33ArbttgsdVz8WnPkl"
)
  .then((resp) => resp.json())
  .then((data) => {
    data.results.slice(0, 3).forEach((item) => {
      console.log(item);
    });
  });

// <a class="links" href="nextPage.html"></a>
