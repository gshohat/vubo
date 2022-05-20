<template>
  <span>Setting up your true worth...</span>
  <el-progress :percentage="16" :format="() => {}" />

  <h1>Bank Accounts and kids savings</h1>
  <h3>Select all that apply</h3>

  <div class="bank-accounts">
    <el-card class="box-card" v-for="saving in savings" :key="saving.icon" @click="saving.isActive = !saving.isActive" :class="{active: saving.isActive}">
      <i :class="[saving.isActive ? 'icon-checked' : saving.icon]" class="icon mx-auto mt-3"></i>
      <div class="text item">{{saving.text}}</div>
    </el-card>
  </div>

  <NavigationFooter @left-button-clicked.once="prevPage" leftButtonText="Back"
                    @right-button-clicked.once="nextPage" rightButtonText="Continue"></NavigationFooter>
</template>

<script>
import NavigationFooter from '@/components/NavigationFooter';

export default {
  name: 'BankAccounts',
  components: {NavigationFooter},
  methods: {
    selectCard () {
      this.isActive = !this.isActive;
    },
    prevPage() {
      this.$router.push('/personal-details');
    },
    nextPage() {
      this.$router.push('/other-assets');
    },
  },
  data () {
    return {
      isActive: false,
      savings: [
        {icon: 'icon-saving', text: 'Savings account', isActive: false},
        {icon: 'icon-plan', text: '529 plan', isActive: false},
        {icon: 'icon-company-stock', text: 'Company stock', isActive: false},
        {icon: 'icon-checking-account', text: 'Checking account', isActive: false},
        {icon: 'icon-edu-ira', text: 'Educational IRA', isActive: false},
        {icon: 'icon-non-retirement', text: 'Non-retirement Investments/ Brokerage Account', isActive: false},
        {icon: 'icon-equity', text: 'Private Equity', isActive: false},
        {icon: 'icon-custodial', text: 'Custodial accounts', isActive: false},
        {icon: 'icon-ownership-stake', text: 'Ownership stake in your business or another business', isActive: false},
      ],
    }
  }
};


</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin: 10px 0 0 0;
}

.icon {
  width: 40px;
  height: 40px;
  display: block;
  background-repeat: no-repeat;
  background-size: 40px;
  background-position: center;
  background-size: cover;
  margin: auto;
}

.active {
  background-color: lightgreen;
}

.icon-checked {
  background-image: url("/assets/img/icons/check-icon.png");
}

.icon-saving{
  background-image: url("/assets/img/icons/004-saving.png");
}

.icon-plan{
  background-image: url("/assets/img/icons/003-planning.png");
}

.icon-company-stock{
  background-image: url("/assets/img/icons/bank-accounts/005-increasing.png");
}

.icon-checking-account{
  background-image: url("/assets/img/icons/bank-accounts/002-accounting.png");
}

.icon-edu-ira{
  background-image: url("/assets/img/icons/bank-accounts/006-graduation-cap.png");
}

.icon-non-retirement{
  background-image: url("/assets/img/icons/bank-accounts/001-invest.png");
}

.icon-equity{
  background-image: url("/assets/img/icons/bank-accounts/007-pie-chart.png");
}

.icon-custodial{
  background-image: url("/assets/img/icons/bank-accounts/custodial.png");
}

.icon-ownership-stake{
  background-image: url("/assets/img/icons/bank-accounts/stake.png");
}

.bank-accounts {
  display: flex;
  flex-wrap: wrap;
}

.box-card {
  flex-basis: 130px;
  height: 150px;
  margin: 10px;
}

</style>



