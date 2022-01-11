<template>
  <div class="accordion__container">
    <div class="button__container" @click="actForm">
      <span>Запросить акт сверки</span>
    </div>

   <acts-content v-for="(item, actsContents) in ActsContent"
                 :key="actsContents"
                 :title="item.title"
                 :period="item.period"
                 :divergences="item.divergences"
                 :date="item.date"
                 :status="item.status"
                 :contract="item.contract"
                 :organization="item.organization"></acts-content>
  </div>
</template>

<script>
    import ActsContent from "@/account/act/ActsContent";
    export default {
        name: "Act",
        components: {ActsContent},
        data () {
            return {
                ActsContent: [
                    {
                        title: 'Акт №УП - 77 от 20.08.2020',
                        period: '01.01.2020 - 20.08.2020',
                        status: 'Создана',
                        date: '23:59 09.01.2020',
                        divergences:'Нет',
                        contract: 0,
                        organization: 'Масс Михаил Юрьевич',
                    },
                    {
                        title: 'Акт №УП - 78 от 21.08.2020',
                        period: '01.01.2020 - 20.08.2020',
                        status: 'Создана',
                        date: '23:59 09.01.2020',
                        divergences:'Нет',
                        contract: 0,
                        organization: 'Масс Михаил Юрьевич',
                    },
                    {
                        title: 'Акт №УП - 79 от 22.08.2020',
                        period: '01.01.2020 - 20.08.2020',
                        status: 'Создана',
                        date: '23:59 09.01.2020',
                        divergences:'Нет',
                        contract: 0,
                        organization: 'Масс Михаил Юрьевич',
                    },
                ],
            }
        },
        methods: {
            actForm() {
                let form = document.getElementById("act");
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