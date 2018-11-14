/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const cats = [{
        name: "cat 1",
        img: "https://www.catster.com/wp-content/uploads/2018/05/A-gray-cat-crying-looking-upset.jpg",
        clicks: 0
    }, {
        name: "cat 2",
        img: "https://r.hswstatic.com/w_907/gif/tesla-cat.jpg",
        clicks: 0
    }, {
        name: "cat 3",
        img: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
        clicks: 0
    }, {
        name: "cat 4",
        img: "https://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/549585-istock-909106260.jpg?itok=ds7LqH1N&resize=1100x1100",
        clicks: 0
    }, {
        name: "cat 5",
        img: "http://www.catster.com/wp-content/uploads/2017/11/A-Siamese-cat.jpg",
        clicks: 0
    }];

const app = new function () {
    var model = {
        getAllCats: function () {
            return cats;
        },
        addClick: function (index) {
            cats[index].clicks++;
        }
    };

    var octopus = {
        init: function () {
            console.log("Octopus started");
            view.init();
        },
        addNewClick: function (index) {
            model.addClick(index);
        },
        getCats: function () {
            return model.getAllCats();
        }
    };

    var view = {
        init: function () {
            this.catList = document.getElementById('list');
            this.visual_area = document.getElementById('visual-area');
            view.renderList();
        },
        renderList: function () {
            const catListInstance = this.catList;
            const vsa = this.visual_area;
            octopus.getCats().forEach(function (cat,i) {
                //por cada gatito creamos un elemento único
                const li = document.createElement('li');
                var img = new Image();
                var nameElem = document.createElement('p');
                var clicks = document.createElement('p');
                
                //les asignamos propiedades
                li.textContent = cat.name;
                li.classList.add('cat');
                img.setAttribute('id',i);
                nameElem.setAttribute('id','name'+i);
                clicks.setAttribute('id','clicks'+i);
                img.style.display = "none";
               
                //asignamos eventos por cada nombre de gatito
                li.addEventListener('click', function () {
                    view.renderCat(cat,i);
                });
                //lo agregamos a la DOM 
                vsa.appendChild(img);
                vsa.appendChild(nameElem);
                vsa.appendChild(clicks);
                catListInstance.appendChild(li);
            });
        },
        renderCat: function (cat,i) {
            //desactivamos la imagen anterior en caso de que se haya selecciona-
            //do otra con anterioridad
            //
            if(this.lastId !== i){
               // console.log('hey');
                document.getElementById(this.lastId).style.display = "none";
                document.getElementById('name'+this.lastId).style.display = "none";
                document.getElementById('clicks'+this.lastId).style.display = "none";
            }
            this.lastId = i;
            //img
            const img = document.getElementById(i);
            img.style.display = "block"
            img.src = cat.img;
            //name
            const name = document.getElementById('name'+i);
            name.textContent = cat.name;
            name.style.display = "block"
            //clicks            
            const clicks = document.getElementById('clicks'+i);
            clicks.textContent = cat.clicks;
            clicks.style.display = "block"
            //console.log(obj);
            img.addEventListener('click', function () {
                 console.log(cat.name);
                 octopus.addNewClick(i);
                 view.renderClicks(clicks,cat);
                 return;
             });
        },
        renderClicks: function (clicks, obj) {
            clicks.textContent = obj.clicks;
            console.log('hello' + obj.name);
        },
        lastId:0,
    };
    octopus.init();
};


