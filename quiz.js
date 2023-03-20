// for (const i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(`The value of "i" is ${i}`);
//   }, 0);
// }

// const myArr = [1, 2, 3, 4, 5, 6];
// console.log(myArr);
// const newArr = myArr.push(7);
// console.log(newArr);
// const newArr = [...myArr, 7, "Haris"];
// console.log(newArr);

let myProducts = [
  {
    id: 1,
    myImage:
      "https://media.istockphoto.com/id/1173038304/photo/jeans-pants-on-a-white-background-front-and-back.jpg?b=1&s=170667a&w=0&k=20&c=ryEw69_Xm8PaChdlU2DTxxuhqjJ6J18Umqj92GJixq4=",
    title: "Pants",
    category: "Men",
    price: "25$",
  },
  {
    id: 2,
    myImage:
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71fnMa3d3JL._UL1500_.jpg",
    title: "Shirts",
    category: "Women",
    price: "15$",
  },
  {
    id: 3,
    myImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz8FQ7STGZGwFCOimZrhpS8DDgEIxF1GeNxhvJIuMiVQ&s",
    title: "Snickers",
    category: "Men",
    price: "25$",
  },
  {
    id: 4,
    myImage:
      "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBzaG9lc3xlbnwwfHwwfHw%3D&w=1000&q=80",
    title: "Shoes",
    category: "Women",
    price: "50$",
  },
  {
    id: 5,
    myImage:
      "https://media.istockphoto.com/id/898399056/photo/yellow-tie.jpg?s=612x612&w=0&k=20&c=GiBZc2EaxA6hzVuSo2MeKBS23w0G2TNyNRHbiEsi4Ps=",
    title: "Ties",
    category: "Men",
    price: "5$",
  },
];
let products = document.querySelector(".products");
let product = document.querySelector(".product");

function allItems() {
  const myData = myProducts.map((product) => {
    return `
           <div class="meriProduct">
            <img src=${product.myImage} />
            <h3>${product.title}</h3>
            <footer>
                <p>${product.category}</p>
                <h5>${product.price}</h5>
            </footer>
           </div>
        `;
  });
  product.innerHTML = myData;
}
allItems();
function menCategory() {
  const myCategory = myProducts.filter(
    (meriProduct) => meriProduct.category === "Men"
  );
  const newProducts = myCategory.map((product) => {
    return `
    <div class="meriProduct">
            <img src=${product.myImage} />
            <h3>${product.title}</h3>
            <footer>
                <p>${product.category}</p>
                <h5>${product.price}</h5>
            </footer>
           </div>
    `;
  });
  product.innerHTML = newProducts;
  console.log("Hello");
}

function womenCategory() {
  const myCategory = myProducts.filter(
    (meriProduct) => meriProduct.category === "Women"
  );
  const newProducts = myCategory.map((product) => {
    return `
        <div class="meriProduct">
        <img src=${product.myImage} />
        <h3>${product.title}</h3>
        <footer>
            <p>${product.category}</p>
            <h5>${product.price}</h5>
        </footer>
       </div>
        `;
  });
  product.innerHTML = newProducts;
}
