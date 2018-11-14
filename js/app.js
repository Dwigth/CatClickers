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

const app = new function() {
    var model = {
        currentCat: null,
        getAllCats: function() {
            return cats;
        }
    };

    var octopus = {
        init: function() {
            console.log("Octopus started");
            model.currentCat = model.getAllCats()[0];

            //inicializa las vistas
            listView.init();
            catView.init();
        },
        getCurrenCat: function() {
            return model.currentCat;
        },
        setCurrenCat: function(cat) {
            model.currentCat = cat;
        },
        addClicks: function() {
            model.currentCat.clicks++;
            //actualizar los clicks
            catView.render();
        },
        getCats: function() {
            return model.getAllCats();
        }
    };

    var listView = {
        init: function() {
            this.catList = document.getElementById('list');
            this.render();
        },
        render: function() {
            var cat, elem, i;
            var cats = octopus.getCats();
            this.catList.innerHTML = '';
            for (i = 0; i < cats.length; i++) {
                cat = cats[i];
                elem = document.createElement('li');
                elem.textContent = cat.name;
                elem.classList.add('cat');
                //asignamos eventos por cada nombre de gatito
                elem.addEventListener('click', (function(catcopy) {
                    return function() {
                        octopus.setCurrenCat(catcopy);
                        catView.render();
                    }
                })(cat));
                //lo agregamos a la DOM
                this.catList.appendChild(elem);
            }
        }
    };
    var catView = {
        init: function() {
            this.img = document.getElementById('cat-img');
            this.name = document.getElementById('cat-name');
            this.clicks = document.getElementById('click-count');

            this.img.addEventListener('click', function() {
                octopus.addClicks();
            });

            this.render();
        },
        render: function() {
            var currentCat = octopus.getCurrenCat();
            this.name.textContent = currentCat.name;
            this.clicks.textContent = currentCat.clicks;
            this.img.src = currentCat.img;
        }
    };

    octopus.init();
};