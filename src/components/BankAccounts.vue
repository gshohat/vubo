<template>
  <span>Setting up your true worth...</span>
  <el-progress :percentage="25" :indeterminate="true" />
  <h1>Bank Accounts and kids savings</h1>
  <h3>Select all that apply</h3>
  <el-card @click="isActive = !isActive" :class="{active: isActive}" class="box-card">
    <i :class="{'icon-checked': isActive, 'icon-saving': !isActive}" class="icon mx-auto mt-3"></i>
    <div class="text item">Savings Account</div>
  </el-card>
</template>

<script>
export default {
  name: 'BankAccounts',
  methods: {
    selectCard () {
      this.isActive = !this.isActive;
    }
  },
  data () {
    return {
      isActive: false
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

.box-card {
  width: 150px;
  height: 150px;
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
  width: 40px;
  height: 40px;
  display: block;
  background-image: url("/assets/img/icons/004-saving.png");
  background-repeat: no-repeat;
  background-size: 40px;
  background-position: center;
  background-size: cover;
  margin: auto;
}

</style>
