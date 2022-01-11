<template>
  <div class="accordion__container">
    <div class="button__container" @click="appealsForm">
      <span>Оставить обращение</span>
    </div>
    <appeals-content v-for="(item, appealsContents) in AppealsContent"
                     :key="appealsContents"
                     :title="item.title"
                     :manager="item.manager"
                     :desc="item.desc"
                     :status="item.status"
                     :importance="item.importance"></appeals-content>
  </div>
</template>

<script>
    import AppealsContent from "@/account/appeals/AppealsContent";
    export default {
        name: "Appeals",
        components: {AppealsContent},
        data () {
            return {
                AppealsContent: [
                    {
                        title: 'Обращение №8753 от 29.12.2021',
                        desc: 'Настроить Принтер / МФУ / Сканер',
                        manager: 'Радыгин Андрей Сергеевич',
                        importance: 'Обычная',
                        status: 'Выполнено',
                    },
                    {
                        title: 'Обращение №9379 от 29.12.2021',
                        desc: 'Настроить Принтер / МФУ / Сканер',
                        manager: 'Радыгин Андрей Сергеевич',
                        importance: 'Обычная',
                        status: 'Выполнено',
                    },
                    {
                        title: 'Обращение №54363 от 29.12.2021',
                        desc: 'Настроить Принтер / МФУ / Сканер',
                        manager: 'Радыгин Андрей Сергеевич',
                        importance: 'Обычная',
                        status: 'Выполнено',
                    },
                ],
            }
        },
        methods: {
            appealsForm() {
                let form = document.getElementById("appeals");
                form.style.display = (form.style.display == 'none') ? 'block' : 'none'
            },
        }
    }
</script>

<style scoped>
  .button__container {
    width: max-content;
    padding: 20px 60px;
    margin-right: 40px;
    background-color: rgba(82, 34, 208, 0.1);
    color: #5222d0;
    font-weight: bold;
    box-sizing: border-box;
    border-radius: 30px;
    transition: all 0.2s ease-out;
  }
  .button__container:hover {
    color: #ffffff;
    cursor: pointer;
    background-color: #5222D0;
    transition: all 0.2s ease-out;
  }
</style>