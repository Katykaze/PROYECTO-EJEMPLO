<template>
    <main class="l-forms">
      <section class="l-forms__form">
        <slot name="form"></slot>
      </section>
      <section class="l-forms__button">
        <slot name="button"></slot>
      </section>
    </main>
  </template>
  
  <script>
  export default{
      name:'l-forms'
  }
  </script>
  <style>
  .l-forms {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
      margin-bottom: 200px;
      min-width: 400px;
      /* height: 100%; */
    }
    .l-forms__form{
      display: flex;
      flex-direction: column;
      gap: 30px;
      
    }
    .l-forms__button{
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  </style>
