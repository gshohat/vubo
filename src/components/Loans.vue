<template>
  <span>Setting up your true worth...</span>
  <el-progress :percentage="64" :format="() => {}" />

  <h1>Mortgage and Other Loans</h1>
  <h3>Select all that apply</h3>
  <div class="loans">
    <el-card class="box-card" v-for="loan in loans" :key="loan.icon" @click="loan.isActive = !loan.isActive" :class="{active: loan.isActive}">
      <i :class="[loan.isActive ? 'icon-checked' : loan.icon]" class="icon mx-auto mt-3"></i>
      <div class="text item">{{loan.text}}</div>
    </el-card>
  </div>
  <NavigationFooter @left-button-clicked.once="prevPage" @right-button-clicked.once="nextPage" leftButtonText="Back" rightButtonText="Continue"></NavigationFooter>
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
      this.$router.push('/retirement-accounts');
    },
    nextPage() {
      alert('to be implemented');
    }
  },
  data () {
    return {
      isActive: false,
      loans: [
        {icon: 'icon-mortgage', text: 'Mortgage', isActive: false},
        {icon: 'icon-home-equity-loan', text: 'Home Equity loan', isActive: false},
        {icon: 'icon-heloc', text: 'HELOC(home equity line of credit)', isActive: false},
        {icon: 'icon-line-of-credit', text: 'Line of Credit', isActive: false},
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

.loans {
  display: flex;
  flex-wrap: wrap;
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

.icon-mortgage{
  background-image: url("/assets/img/icons/loans/001-mortgage-loan.png");
}

.icon-home-equity-loan{
  background-image: url("/assets/img/icons/loans/002-loan.png");
}

.icon-heloc{
  background-image: url("/assets/img/icons/loans/assistance.png");
}

.icon-line-of-credit{
  background-image: url("/assets/img/icons/loans/money-bag 1.png");
}
</style>



