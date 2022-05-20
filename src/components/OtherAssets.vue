<template>
  <span>Setting up your true worth...</span>
  <el-progress :percentage="32" :format="() => {}" />

  <h1>Property and Other Assets</h1>
  <h3>Select all that apply</h3>
  <div class="other-assets">
    <el-card class="box-card" v-for="asset in assets" :key="asset.icon" @click="asset.isActive = !asset.isActive" :class="{active: asset.isActive}">
      <i :class="[asset.isActive ? 'icon-checked' : asset.icon]" class="icon mx-auto mt-3"></i>
      <div class="text item">{{asset.text}}</div>
    </el-card>
  </div>
  <NavigationFooter @left-button-clicked.once="prevPage" leftButtonText="Back"
                    @right-button-clicked.once="nextPage" rightButtonText="Continue"></NavigationFooter>
</template>

<script>
import NavigationFooter from '@/components/NavigationFooter';

export default {
  name: 'OtherAssets',
  components: {NavigationFooter},
  methods: {
    selectCard () {
      this.isActive = !this.isActive;
    },
    prevPage() {
      this.$router.push('/bank-accounts');
    },
    nextPage() {
      this.$router.push('/retirement-accounts');
    },
  },
  data () {
    return {
      isActive: false,
      assets: [
        {icon: 'icon-primary-residence', text: 'Primary Residence', isActive: false},
        {icon: 'icon-inherited-ira', text: 'Inherited IRA', isActive: false},
        {icon: 'icon-vacation-property', text: 'Vacation Property', isActive: false},
        {icon: 'icon-investment-property', text: 'Investment Property', isActive: false},
        {icon: 'icon-collectibles', text: 'Collectibles', isActive: false},
        {icon: 'icon-cash-value-life-insurance', text: 'Cash Value Life Insurance', isActive: false},
        {icon: 'icon-recoverable-trust', text: 'Recoverable Trust', isActive: false},
        {icon: 'icon-irrecoverable-trust', text: 'Irrecoverable Trust(if your\'re the beneficiery)', isActive: false},
        {icon: 'icon-Vehicles', text: 'Vehicles(if not a lease)', isActive: false},
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

.other-assets {
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

.icon-primary-residence{
  background-image: url("/assets/img/icons/other-assets/006-pin.png");
}

.icon-inherited-ira{
  background-image: url("/assets/img/icons/other-assets/007-save-money.png");
}

.icon-vacation-property{
  background-image: url("/assets/img/icons/other-assets/005-home.png");
}

.icon-investment-property{
  background-image: url("/assets/img/icons/other-assets/004-apartment.png");
}

.icon-collectibles{
  background-image: url("/assets/img/icons/other-assets/008-collection.png");
}

.icon-cash-value-life-insurance{
  background-image: url("/assets/img/icons/other-assets/003-coins.png");
}

.icon-recoverable-trust{
  background-image: url("/assets/img/icons/other-assets/002-trust.png");
}

.icon-irrecoverable-trust{
  background-image: url("/assets/img/icons/other-assets/001-shield.png");
}

.icon-Vehicles{
  background-image: url("/assets/img/icons/other-assets/009-car.png");
}
</style>



