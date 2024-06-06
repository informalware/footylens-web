import { backend_address } from "$lib/consts";
import { redirect, type Actions } from "@sveltejs/kit";
import axios from "axios";

export const actions: Actions = { 
    default: async (event) => {
        const formData = Object.fromEntries(await event.request.formData());

        if (!formData.email || !formData.password || !formData.username || !formData.display) {
            return {
                data: formData,
                error: "Email, senha, nome de usuário ou nome de exibição não informados"
            }
        }

        let { email, password, username, display } = formData as { email: string, password: string, username: string, display: string };

        email = email.trim();
        password = password.trim();
        username = username.trim().toLowerCase();
        display = display.trim();

        if (username.startsWith("@")) username = username.slice(1);

        try {
            await axios.post(backend_address + "/users", {email, password, username, display});
        } catch (e) {
            return {
                data: formData,
                error: `Erro ao tentar criar usuário: ${e}`
            }
        }

        throw redirect(302, "/login");
    }
}