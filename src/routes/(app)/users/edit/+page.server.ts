import { backend_address } from "$lib/consts";
import type { Actions } from "@sveltejs/kit";
import axios from "axios";


export const actions: Actions = {
    default: async (event) => {
        const formData = Object.fromEntries(await event.request.formData());

        const { display, email, bio } = formData as { display: string, email: string, bio: string };

        try {
            const res = await axios.patch(backend_address + "/users/" + event.cookies.get("user_session"), {display, email, bio});

            return {
                data: res.data
            }
        } catch {
            return {
                data: formData,
                error: `Erro ao tentar editar perfil.`
            }
        }
    }
}