<script context="module">
  import { goto } from "$app/navigation";
  import { fetch, Body } from "@tauri-apps/api/http";
</script>

<script>
  let user = {
    login: "",
    email: "",
    password: "",
  };

  const handleLogin = () => {
    fetch("http://localhost:5000/signup", {
      method: "POST",
      body: Body.json(user),
    });
  };
</script>

<section
  class="flex min-h-screen bg-white justify-between items-center flex-col p-5 w-full"
>
  <h1 class="text-zhpg-light text-3xl text-center font-sans m-2">
    Załóż konto w <strong>RajdApp</strong>
  </h1>
  <div class="w-full space-y-5">
    <div>
      <label for="">
        <span class="text-md text-zhpg-light">Login</span>
      </label>
      <input type="text" class="input" bind:value={user.login} />
    </div>
    <div>
      <label for="">
        <span class="text-md text-zhpg-light">Email</span>
      </label>
      <input type="text" class="input" bind:value={user.email} />
    </div>
    <div>
      <label for="" class="block">
        <span class="text-md text-zhpg-light">Hasło</span>
      </label>
      <input type="password" class="input" bind:value={user.password} />
    </div>
  </div>
  <div class="space-y-2 w-full">
    <button class="btn" on:click={handleLogin}>Załóż konto</button>
    <button
      on:click={() => {
        goto("/");
      }}
      class="btn-outline">Powrót</button
    >
  </div>
</section>
