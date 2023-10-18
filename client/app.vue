<script setup>
const hello = ref("Hello, Nobody");

const config = useRuntimeConfig();
const apiURL = config.public.apiBaseUrl;

const name = ref("Adi");

const { data } = await useFetch(apiURL + `/hello?name=${name.value}`, {
  method: "GET",
});

console.log(data.value);

if (data.value.statusCode == 200) {
  hello.value = data.value.message;
}

const inputName = async () => {
  // Get api from localhost 3000
  const { data } = await useFetch(apiURL + `/hello?name=${name.value}`, {
    method: "GET",
  });

  console.log(data.value);

  if (data.value.statusCode == 200) {
    hello.value = data.value.message;
  }
};
</script>
<template>
  <div>
    <h1>
      {{ hello }}
    </h1>

    <input v-model="name" type="text" /> <br />
    <button @click="inputName">Click Me</button>
  </div>
</template>
