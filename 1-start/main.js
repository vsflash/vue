let classWork = new Vue({
    el: '#classWork',
    data: {
        bindClass2: 'grey',
        lecture: true,
        isHidden: true,
        films: [
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
        ]
    }
});
