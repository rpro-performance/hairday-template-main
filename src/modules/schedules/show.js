import dayjs from "dayjs";

const periodMorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodNight = document.getElementById("period-night")


export function schedulesShow({ dailySchedules }) {
    try {
        periodMorning.innerHTML = ""
        periodAfternoon.innerHTML = ""
        periodNight.innerHTML = ""

        //

        dailySchedules.forEach((schedule) => {

            const item = document.createElement("li")
            const time = document.createElement("strong")
            const name = document.createElement("span")

            item.setAttribute("data-id", schedule.id)

            time.textContent = dayjs(schedule.when).format("HH:mm")
            name.textContent = schedule.name

            const cancelIcon = document.createElement("img")
            cancelIcon.classList.add("cancel-icon")

            cancelIcon.setAttribute("src", "./src/assets/cancel.svg")
            cancelIcon.setAttribute("alt", "cancelar")

            //

            item.append(time, name, cancelIcon)
            //

            const hour = dayjs(schedule.when).hours()
            //

            if(hour <= 12) {
                periodMorning.appendChild(item)
            } else if (hour > 12 && hour <= 18) {
                periodAfternoon.appendChild(item)
            } else {
                periodNight.appendChild(item)
            }
            
        })

    } catch (error) {
        alert("Não foi possivel exibir os agendamentos")
        console.log(error)
    }

}