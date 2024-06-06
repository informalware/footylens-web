import { backend_address } from "$lib/consts";
import type { Actions } from "@sveltejs/kit";
import axios from "axios";

export const actions: Actions = {
    default: async (event) => {
        const formData = Object.fromEntries(await event.request.formData());

        const { matchId, review } = formData as { userId: string, matchId: string, review: string };

        try {
            const res = await axios.post(backend_address + "/reviews", {userId: Number(event.cookies.get("user_session")), review, matchId: Number(matchId), rating: 4});

            return {
                data: res.data
            }
        } catch {
            return {
                data: formData,
                error: `Erro ao tentar salvar avaliação.`
            }
        }
    }
}