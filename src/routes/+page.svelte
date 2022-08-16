<script context="module">
  import { goto } from "$app/navigation";
</script>

<section
  class="flex min-h-screen bg-white justify-between items-center flex-col p-5 w-full"
>
  <h1 class="text-zhpg-light text-3xl text-center font-sans m-2">
    Witaj w <strong>RajdApp!</strong>
  </h1>
  <img src="./gory.png" alt="Obrazek gór" />
  <div class="space-y-2 w-full">
    <a href="/auth/login">
      <button class="btn">Zaloguj</button>
    </a>
    <button
      on:click={() => {
        goto("/auth/register/");
      }}
      class="btn-outline">Załóż konto</button
    >
  </div>
</section>
