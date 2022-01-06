<template>
  <div class="home__services__container">
    <div class="services__wrapper">
      <h1 class="title-section">Мы предлагаем</h1>
      <div class="services__blocks">
        <!--1 left image block-->
        <div class="service">
          <div class="service-image"><img src="@/assets/images/automation.svg"></div>
          <div class="service-information">
            <h2 class="service-title">Автоматизация бизнеса</h2>
            <p class="service-description">Мы занимаемся разработкой и внедрением решений для комплексной
              автоматизации розничных и оптовых сетей, автоматизации склада,
              автомобильных технических центров, медицинских учреждений,
              фитнес центров и других направлений бизнеса на базе решений 1С.</p>
            <div class="view-more">Узнать больше</div>
          </div>
        </div>
        <!--2 right image block-->
        <div class="service">
          <div class="service-information">
            <h2 class="service-title">Автоматизация учреждений госсектора</h2>
            <p class="service-description">Предложим вам оптимальные решения для автоматизации бухгалтерского,
              финансового и налогового учета, расчета заработной платы, ведения
              сводной отчетности на базе специализированных конфигураций 1С
              и собственных наработок в бюджетных и некоммерческих организациях.</p>
            <div class="view-more">Узнать больше</div>
          </div>
          <div class="service-image indent-right"><img src="@/assets/images/institutions.svg"></div>
        </div>
        <!--3 left image block-->
        <div class="service" v-on:click="goToPage('consulting')">
          <div class="service-image">
            <lottie-animation class="anim"
                              :loop="true"
                              :autoPlay="true"
                              ref="anim"
                              :animationData="require('@/assets/animation/consulting.json')"
            />
          </div>
          <div class="service-information">
            <h2 class="service-title">Консалтинговые услуги</h2>
            <p class="service-description">У нас вы можете получить консультации экспертов по широкому
              кругу вопросов в сфере финансовой и коммерческой деятельности,
              бухгалтерского и управленческого учета, оптимизации бизнес
              процессов, отчетности в надзорные органы. Поможем с обучением
              кадров. Разработаем стратегии развития вашего бизнеса.</p>
            <div class="view-more">Узнать больше</div>
          </div>
        </div>
        <!--4 right image block-->
        <div class="service">
          <div class="service-information">
            <h2 class="service-title">Бухгалтерское обслуживание</h2>
            <p class="service-description">Перейдите на комплексный аутсорсинг услуг бухгалтерского и налогового
              учета, расчета заработной платы. Доверьте профессионалам рутинную
              работу по формированию и обработке первичных документов, сдаче
              всех видов отчетности, организации и ведению ЭДО с контрагентами.</p>
            <div class="view-more">Узнать больше</div>
          </div>
          <div class="service-image indent-right"><img src="@/assets/images/accountant.svg"></div>
        </div>
      </div>
      <!--5 left image block-->
      <div class="service">
        <div class="service-image"><img src="@/assets/images/maintenance.svg"></div>
        <div class="service-information">
          <h2 class="service-title">IT - аутсорсинг</h2>
          <p class="service-description">Производим развертывание и техническое сопровождение информационных
            систем, обслуживание компьютерных сетей. Обеспечиваем непрерывный
            доступ к ИТ-инфраструктуре вашего предприятия. Размещаем информационные
            системы учета на базе 1С на мощностях нашей компании.</p>
          <div class="view-more">Узнать больше</div>
        </div>
      </div>
      <!--6 right image block-->
      <div class="service">
        <div class="service-information">
          <h2 class="service-title">Продажа, внедрение и поддержка программ «1С»</h2>
          <p class="service-description">У нас вы можете подобрать, купить и установить любой программный
            продукт «1С». Мы проконсультируем вас в выборе оптимальной программы
            для вашего бизнеса, подключим сервисы 1С, упрощающие работу,
            предложим наиболее подходящий договор ИТС для поддержки
            и обновления системы.</p>
          <div class="view-more">Узнать больше</div>
        </div>
        <div class="service-image indent-right"><img src="@/assets/images/programs.svg"></div>
      </div>
      <!--7 left image block-->
      <div class="service">
        <div class="service-image"><img src="@/assets/images/equipment.svg"></div>
        <div class="service-information">
          <h2 class="service-title">Продажа и настройка торгового оборудования</h2>
          <p class="service-description">Мы предлагаем к продаже широкий выбор кассового и торгового
            оборудования, расходных материалов. Кассы, сканеры штрих-кодов,
            принтеры этикеток, торговые весы, денежные ящики, терминалы сбора
            данных. Поможем в выборе, настройке и обслуживании. Подберем
            оборудование для соответствия 54-ФЗ и системе Маркировки
            товаров «Честный знак».</p>
          <div class="view-more">Узнать больше</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import LottieAnimation from 'lottie-web-vue'
    export default {
        name: "Services",
        components: {
            LottieAnimation
        },
        methods: {
            goToPage(page) {
                this.$router.push(page);
                window.scrollTo(0,0);
            }
        },
    }
</script>

<style scoped>
.home__services__container {

}
.services__wrapper {
  padding: 100px;
  box-sizing: border-box;
  border-radius: 30px;
  background: linear-gradient(45deg, rgba(32, 195, 208, 0.11) 10%, rgba(57, 116, 208, 0.11) 64%, rgba(0, 134, 201, 0.11) 100%);
}
.title-section {
  font-size: 36px;
  font-weight: bold;
  margin: 0;
}
.service {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  cursor: pointer;
}
.service-image {
  width: 27%;
  margin-right: 70px;
  transition: all 0.2s ease;
}
.service-information {
  width: 50%;
}
.indent-right {
  margin: 0 0 0 70px;
}
.service-title {
  font-weight: bold;
  font-size: 21px;
  margin: 0;
}
.service-description {
  color: #606060;
  margin-top: 10px;
}
.view-more {
  width: max-content;
  color: #0093da;
  font-weight: bold;
  text-decoration: none;
}
.view-more:hover {
  text-decoration: underline;
}
.service:hover .service-image {
  transform: scale(1.05);
  transition: all 0.2s ease;
}
@media only screen and (max-width : 1700px) {

}
</style>