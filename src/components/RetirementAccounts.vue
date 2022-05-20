<template>
  <span>Setting up your true worth...</span>
  <el-progress :percentage="48" :format="() => {}" />

  <h1>Retirement Accounts</h1>
  <h3>Select all that apply</h3>
  <div class="retirement-accounts">
    <el-card class="box-card" v-for="account in accounts" :key="account.icon" @click="account.isActive = !account.isActive" :class="{active: account.isActive}">
      <i :class="[account.isActive ? 'icon-checked' : account.icon]" class="icon mx-auto mt-3"></i>
      <div class="text item">{{account.text}}</div>
    </el-card>
  </div>
  <NavigationFooter @left-button-clicked.once="prevPage" leftButtonText="Back"
                    @right-button-clicked.once="nextPage" rightButtonText="Continue"></NavigationFooter>
</template>

<script>
import NavigationFooter from '@/components/NavigationFooter';

export default {
  name: 'RetirementAccounts',
  components: {NavigationFooter},
  methods: {
    selectCard () {
      this.isActive = !this.isActive;
    },
    prevPage() {
      this.$router.push('/other-assets');
    },
    nextPage() {
      this.$router.push('/loans')
    },
  },
  data () {
    return {
      isActive: false,
      accounts: [
        {icon: 'icon-401k-account', text: '401k Account', isActive: false},
        {icon: 'icon-ira', text: 'IRA-Traditional Rollover, Both, SEP', isActive: false},
        {icon: 'icon-403b-account', text: '403b account', isActive: false},
        {icon: 'icon-pension-plan', text: 'Pension Plan', isActive: false},
        {icon: 'icon-457-account', text: '457 account', isActive: false},
        {icon: 'icon-profit-sharing-plan', text: 'Profit Sharing Plan', isActive: false},
      ],
    }
  }
};


</script>

<style scoped>

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin: 10px 0 0 0;
}

.retirement-accounts {
  display: flex;
  flex-wrap: wrap;
  /*justify-content: space-around;*/
}

.box-card {
  flex-basis: 130px;
  height: 150px;
  margin: 10px;
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

.icon-401k-account{
  background-image: url("/assets/img/icons/retirement-accounts/002-bank.png");
}

.icon-ira{
  background-image: url("/assets/img/icons/retirement-accounts/001-pension.png");
}

.icon-403b-account{
  background-image: url("/assets/img/icons/retirement-accounts/005-money.png");
}

.icon-pension-plan{
  background-image: url("/assets/img/icons/003-planning.png");
}

.icon-457-account{
  background-image: url("/assets/img/icons/retirement-accounts/006-dollar.png");
}

.icon-profit-sharing-plan{
  background-image: url("/assets/img/icons/retirement-accounts/004-business-plan.png");
}
</style>
