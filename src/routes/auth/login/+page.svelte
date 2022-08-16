<script context="module">
  import { goto } from "$app/navigation";
  import { fetch, Body } from "@tauri-apps/api/http";
</script>

<script>
  let user = {
    login: "",
    password: "",
  };

  const handleLogin = () => {
    fetch("http://localhost:5000/login", {
      method: "POST",
      body: Body.json(user),
    }).then((res) => {
      console.log(res.data);
    });
  };
</script>

<section
  class="flex min-h-screen bg-white justify-between items-center flex-col p-5 w-full"
>
  <h1 class="text-zhpg-light text-3xl text-center font-sans m-2">
    Zaloguj się do <strong>Aplikacji</strong>
  </h1>
  <img src="../../gory.png" alt="Obrazek gór" />
  <div class="w-full space-y-5">
    <div>
      <label for="">
        <span class="text-md text-zhpg-light">Login</span>
      </label>
      <input type="text" class="input" bind:value={user.login} />
    </div>
    <div>
      <label for="" class="block">
        <span class="text-md text-zhpg-light">Hasło</span>
      </label>
      <input type="password" class="input" bind:value={user.password} />
    </div>
  </div>
  <div class="space-y-2 w-full">
    <button class="btn" on:click={handleLogin}>Zaloguj</button>
    <button
      on:click={() => {
        goto("/");
      }}
      class="btn-outline">Powrót</button
    >
  </div>
</section>
