let boxes = document.createElement("main")
let form = document.forms.reminders
let remindersName = []

function reminders(arr, name) {
    for (let item of arr) {
        if (item.isDone == false && /\w/.test(name.value)) {
            name.classList.remove("false", "fade")
            name.classList.add("true")

            let box = document.createElement("div")
            let header = document.createElement("h3")
            let price = document.createElement("p")
            let del = document.createElement("div")

            box.id = item.id
            header.innerHTML = name.value
            price.innerHTML = item.time
            del.innerHTML = "X"

            box.classList.add("box")
            price.classList.add("blue")
            del.classList.add("delete")

            boxes.append(box)
            box.append(header, price, del)
            item.isDone = true
        } else {
            name.classList.remove("true")
            name.classList.add("false", "fade")
        }
    }
}

document.querySelector("hr").after(boxes)

form.onsubmit = (event) => {
    event.preventDefault()

    let inp = document.querySelector("input")


    let hours = new Date().getHours().toString()
    let minut = new Date().getMinutes().toString()

    if (minut.length == 1) {
        minut = "0" + minut
    } else {
        minut = minut
    }

    let task = {
        id: Math.random(),
        isDone: false,
        time: hours + ":" + minut
    }

    remindersName.push(task)

    reminders(remindersName, inp)
}
