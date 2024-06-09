import { backend_address } from "$lib/consts";
import type { Actions } from "@sveltejs/kit";
import axios from "axios";

export const actions: Actions = {
    default: async (event) => {
        const formData = Object.fromEntries(await event.request.formData());

        const { reviewId, commentary } = formData as { userId: string, reviewId: string, commentary: string };

        try {
            const res = await axios.post(backend_address + "/commentaries", {userId: Number(event.cookies.get("user_session")), commentary, reviewId: Number(reviewId)});

            return {
                data: res.data
            }
        } catch {
            return {
                data: formData,
                error: `Erro ao tentar salvar comentario.`
            }
        }
    }
}