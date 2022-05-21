<template>
  <h1 data-cy="title">Let's start by getting to know you</h1>
  <h2>We need a few details</h2>
  <div>
        <FormKit
            label="First Name" type="text" />
        <FormKit style="flex: 1"
                 label="Last Name" type="text" />
        <FormKit
            label="Email" type="text" />
        <FormKit
            label="Zip Code" type="text" />

        <FormKit
            type="date"
            label="Birthday"
        />
        <FormKit
            type="select"
            label="Status"
            name="status"
            :options="[
    'Head of Household',
    'Married',
    'Single',
    'Seperated',
    'Divorced',
  ]"
        />
        <FormKit
            type="select"
            label="Children"
            name="children"
            :options="[
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
  ]"
        />
  </div>

  <h3>Great to meet you here</h3>
  <NavigationFooter @left-button-clicked.once="signOut" leftButtonText="Sign Out"
                    @right-button-clicked.once="nextPage" rightButtonText="Continue"></NavigationFooter>
</template>

<script>
import NavigationFooter from '@/components/NavigationFooter';

export default {
  name: 'PersonalDetails',
  components: { NavigationFooter },
  methods: {
    signOut() {
      alert('signout to be implemented');
    },
    nextPage() {
      this.$router.push('/bank-accounts');
    }
  },
  data() {
    return {
      firstName: null,
      lastName: null,
      email: null,
      zipCode: null,
      birthDate: null,
      status: null,
      children: null,

    }
  },
}

</script>

<style scoped>
</style>
