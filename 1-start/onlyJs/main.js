const films2 = [
    {
        id: 1,
        active: 'active',
        title: 'Film1',
        actors: [
            'actors1',
            'actors2',
            'actors3'
        ]
    },
    {
        id: 2,
        active: '',
        title: 'Film2',
        actors: [
            'actors4',
            'actors5',
            'actors6'
        ]
    },
    {
        id: 3,
        active: '',
        title:'Film3',
        actors: [
            'actors7',
            'actors8',
            'actors9'
        ]
    }
];
let txt = '';
let txt2 = '';
let txt3 = '';
films2.forEach(renderFilmsNav);
document.getElementById("navTabs").innerHTML = txt;

function renderFilmsNav(element) {
    txt = txt + '<li class="nav-item"><a class="nav-link ' +
        element.active + '" data-toggle="tab" href="#' + element.id + '">' +
        element.title + '</a></li>';
}

films2.forEach(renderFilmsPanes);
document.getElementById("panesTab").innerHTML = txt2;

function renderFilmsPanes(element) {
    txt3 = '';
    txt2 = txt2 + '<div id="' + element.id + '" class="' + element.active + ' container tab-pane">';
    element.actors.forEach(renderFilmsActors);
    txt2 = txt2 + txt3 + '</div>';
}

function renderFilmsActors(value) {
    txt3 = txt3 + '<p>' + value + '</p>';
}

function changeColor(value) {
    document.getElementById("panesTab").style.backgroundColor = value;
}
