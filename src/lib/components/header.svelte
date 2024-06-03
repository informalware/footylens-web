<script>
    import logo from '$assets/nome_branco.png'
    import "/src/app.pcss";

    import { Search } from "lucide-svelte";
</script>

<header class="">
    <a href="/home">
        <img src={logo} alt="Logo do site">
    </a>

    <div class="spacer"></div>

    <a href="/search" class="big-bold">
        <Search size={24}/>
    </a>
</header>

<style>
    header {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        padding: 1rem;
        padding-right: 2rem; /* ajuste este valor conforme necessário */
        background-color: hsl(var(--accent));
        align-items: center;
    }

    img {
        width: 22rem;
    }

    .spacer {
        flex-grow: 1;
    }
</style>