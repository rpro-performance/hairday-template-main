import { hoursLoad } from "../form/hours-load.js"
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { schedulesShow } from "../schedules/show.js"

const selectedDate = document.getElementById("date")

export async function schedulesDay() {
    //obtem a data do input
    const date = selectedDate.value


    const dailySchedules = await scheduleFetchByDay({ date })
    
    schedulesShow({ dailySchedules })
    
    //renderiza as horas disponiveis
    hoursLoad({ date, dailySchedules })
}