<div>
    <form action="/post-review" method="post">
        <div class="button-container">
            <textarea class="review" name="review" required></textarea>
            <button class="submit">Postar</button>
        </div>
    </form>
</div>


<style>
    .button-container {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    .review {
        width: 100%;
        height: 100px;
        margin-top: 1rem;
        background-color: hsl(var(--accent));
        font-size: 1rem;
        font-weight: lighter;
        border-radius: 5px;
        padding: 5px;
    }

    .submit {
        font-size: 15px;
        background-color: hsl(var(--accent));
        color: white;
        padding: 8px 16px;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;

        margin-left: 90%;
        margin-bottom: 1rem;
        margin-top: 1rem;
    }


    .submit:hover {
        background-color: #0d2035;
    }
</style>