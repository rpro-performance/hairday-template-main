import { scheduleCancel } from "../../services/schedules-cancel"
import { schedulesDay } from "./load"

const periodds = document.querySelectorAll(".period")

//evento de clique

periodds.forEach((period) => {
    period.addEventListener("click", async (event) => {
        if(event.target.classList.contains("cancel-icon")) {
            const item = event.target.classList("li")
            const { id } = item.dataset


            if (id) {
                const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento")
               
                if (isConfirm) {
                    await scheduleCancel({ id })
                    schedulesDay()
                }
            }
        }
    })
})