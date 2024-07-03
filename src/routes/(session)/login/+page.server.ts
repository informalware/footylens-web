import { backend_address } from "$lib/consts";
import { redirect, type Actions } from "@sveltejs/kit";
import axios from "axios";

export const actions: Actions = {
    default: async (event) => {
        const formData = Object.fromEntries(await event.request.formData());

        if (!formData.email || !formData.password) {
            return {
                data: formData,
                error: "Email ou senha não informados"
            }
        }

        const { email, password } = formData as { email: string, password: string };

        try {
            const res = await axios.post(backend_address + "/login", {email, password});
            const { userid } = res.data as { error: string | undefined, userid: string | undefined };
            
            event.cookies.set("user_session", userid?.toString() || "", {
                path: "/",
                maxAge: 60*60*24, // 1 dia
            });
            
        } catch (e) {
            return {
                data: formData,
                error: `Erro ao tentar fazer login.`
            }
        }

        throw redirect(302, "/home");
    }
}