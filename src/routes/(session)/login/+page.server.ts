import { goto } from "$app/navigation";
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
        const res = await axios.post(backend_address + "/login", {email, password});
        const { error, userid } = res.data as { error: string | undefined, userid: string | undefined };

        if (error) {
            return {
                data: formData,
                error
            }
        }

        event.cookies.set("user_session", userid?.toString() || "", {
            path: "/",
            maxAge: 60*60*24, // 1 dia
        });

        throw redirect(302, "/home");
    }
}