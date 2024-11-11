import dayjs from "dayjs"

import { scheduleNew } from "../../services/schedule-new.js"
import { schedulesDay } from "../schedules/load.js"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")
const clientName = document.getElementById("client")
//date atual para formatar input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

//carrega a data atual
selectedDate.value = inputToday

//DEFINE A DATA MINIMA PARA AGENDAMENTO
selectedDate.min = inputToday

form.onsubmit = async (event) => {
    event.preventDefault()

    try {
        const name = clientName.value.trim()

        if(!name) {
            return alert("informe o nome do cliente!")
        }

        const hourSelected = document.querySelector(".hour-selected")

        if(!hourSelected) {
            return alert("Selecione a hora.")
        }

        const [hour] = hourSelected.innerText.split(":")

        const when = dayjs(selectedDate.value).add(hour, "hour")
   
        const id = new Date().getTime()

        await scheduleNew({
            id,
            name,
            when,
        })

        await schedulesDay()
        clientName.value = ""
    } catch (error) {
        alert("Não foi possivel realizar o agendamento")
        console.log(error)
    }
}