let classWork = new Vue({
    el: '#classWork',
    data: {
        bindClass2: 'grey',
        lecture: true,
        isHidden: true,
        activeId: 1,
        films: [
            {
                id: 1,
                active: true,
                title: 'Film1',
                actors: [
                    'actors1',
                    'actors2',
                    'actors3'
                ]
            },
            {
                id: 2,
                active: false,
                title: 'Film2',
                actors: [
                    'actors4',
                    'actors5',
                    'actors6'
                ]
            },
            {
                id: 3,
                active: false,
                title:'Film3',
                actors: [
                    'actors7',
                    'actors8',
                    'actors9'
                ]
            }
        ]
    }
});
