export class Emitter {
    constructor() {
        this.listeners = {}
    }

    // уведомляем случшателей если они есть
    emit(event, ...args) {
        if (!Array.isArray(this.listeners[event])) {
            return false
        }
        this.listeners[event].forEach((listener) => {
            listener(...args)
        })
        return true
    }

    // подписываемся на уведомление
    // добавляем нового слушателя
    subscribe(event, fn) {
        this.listeners[event] = this.listeners[event] || []
        this.listeners[event].push(fn)

        return () => {
            this.listeners[event] =
                this.listeners[event].filter((listener) => listener !== fn)
        }
    }
}
/*
const emitter = new Emitter()
emitter.subscribe('vladilen', (data) => console.log('Sub:', data))
emitter.emit('vladilen', 42)

setTimeout(() => {
    emitter.emit('vladilen', 'After 2 seconds')
}, 2000)
*/
