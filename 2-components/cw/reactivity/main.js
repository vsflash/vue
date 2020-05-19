class MyVue {
    constructor(params) {
        this.rootSelector = params.elem
        this.data = params.data
        this.init()
    }

    init() {
        const self = this;
        this.rootElement = document.querySelector(this.rootSelector);
        for(let key in this.data) {
            this[key] = this.data[key]
            let val = this[key];

            Object.defineProperty(this, key, {
                get() {
                    return val
                },
                set(newValue) {
                    val = newValue;
                    self.render()
                }
            })
        }
        this.render()

    }
    render() {
        for(let key in this.data) {
            const newElem = document.createElement('div');
            newElem.innerText = this[key]
            this.rootElement.appendChild(newElem)
        }
    }
}

document.addEventListener('DOMContentLoaded', main, false);

function main() {
    const test = new MyVue({
        elem: '#app',
        data: {
            str: 'lesson 1',
            str2: 'reactivity'
        }
    })

    const inp = document.querySelector('#app input')
    inp.addEventListener('input', changeStr)

    function changeStr() {
        test.str = this.value
    }
}

// реактивность в Vue.js https://webdevblog.ru/ponimanie-reaktivnosti-vo-vue-js-shag-za-shagom/