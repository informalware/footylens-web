<script lang="ts">
    import '../../app.pcss';
    import logo from '$assets/nome_branco.png';
</script>

<div class="body-layout">
    <main>
        <div class="centered-square">
            <div class="image-container">
                <img src={logo} alt="Logo" width="100" />
            </div>
            <div class="content-container">
                <slot />
            </div>
        </div>
    </main>
</div>

<style>
    .body-layout {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    main {
        flex-grow: 1;
    }

    .image-container {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    img {
        margin-bottom: 20px;
        width: 400px;
    }

    .centered-square {
        width: 500px;
        height: 580px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        background-color: hsl(var(--accent));
        box-shadow: 0 0 10px rgba(0,0,0,0.15);
        position: absolute;
        border-radius: 25px;
        padding: 40px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .content-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>