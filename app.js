const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

const btnContainer = document.querySelector("#buttons"); //id'si buttons olan tag?? al
const menuItems = document.querySelector("#menuItems"); //id'si menuItems olan tag?? al

createButtons("All"); //All isimli butonu olu??tumak i??in fonksiyona git parametre olarak "All"
createButtons("Korea");
createButtons("Japan");
createButtons("China");

window.onload = function(){ // ilk a????l????ta b??t??n menuyu g??ster
  addMenuItems(menu);
}

const btnAll = document.querySelector("#All");//olu??an buton tag??na ula?? ve bilgiyi atanan de??i??kende tut
const btnKorea = document.querySelector("#Korea");
const btnJapan = document.querySelector("#Japan");
const btnChina = document.querySelector("#China");

btnAll.addEventListener('click',btnClick);//all butonuna t??kland??????nda btnClick fonksiyonunu ??al????t??r
btnKorea.addEventListener('click',btnClick);//di??er butonlar i??inde ayn?? i??lemi yap??l??r
btnJapan.addEventListener('click',btnClick);
btnChina.addEventListener('click',btnClick);

function btnClick(){//t??klanan de??erin id'si All ise menuyu de??ilse gelen parametrenin id'si t??klanan menunun categori ismiyle ayn??ysa return et ve bunu result adl?? de??i??kene ata 
  const result = (this.getAttribute("id") == "All") ? menu : menu.filter((item) => {
    return item.category == this.getAttribute("id");
  });
  addMenuItems(result); // return edilen de??eri addMenuItems adl?? fonksiyona g??nderir ve t??klanan menunun elemanlar??n?? ekrana getirir.
};

function createButtons(btnName){ 
    const button = document.createElement("button");//button olu??tur
    button.id=`${btnName}`, button.className = "btn btn-item btn-outline-secondary" , button.innerHTML=`${btnName}`;//id, classname ve innerhtmal de??erleri ata
    btnContainer.appendChild(button);//btncontainer alt??na yerle??tir.
}
function addMenuItems(allMenuItems){
  menuItems.innerHTML = ""; // fonksiyon her ??a??r??ld??????nda elemanlar?? yeniden olu??turmamak i??in ??nce i??eri??ini temizliyoruz.
  for (let item in allMenuItems) { //parametre olarak gelen de??er i??in d??ng?? ??al??????r ve bu de??er ait menu elemanlar??n?? olu??turur.
    let divDOM = document.createElement("div");
    divDOM.classList.add("menu-items", "col-lg-6", "col-sm-12");
    divDOM.innerHTML = `<img src="${allMenuItems[item].img}" alt="${allMenuItems[item].title}" class="photo">
    <div class="menu-info">
      <div class="menu-title">
        <h4>${allMenuItems[item].title}</h4>
        <h4 class="price">${allMenuItems[item].price}</h4>
      </div>
      <div class="menu-text">
      ${allMenuItems[item].desc}
      </div>
    </div>`
    menuItems.append(divDOM);
  }
      
}




