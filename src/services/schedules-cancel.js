import { apiConfig } from "./api-config";

export async function scheduleCancel({ id }) {
    try {
        await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
            method: "DELETE",
        })

        alert("Deletado com sucesso!")
    } catch (error) {
        console.log(error)
        alert('Não foi possivel cancelar o agendamento')
    }
}