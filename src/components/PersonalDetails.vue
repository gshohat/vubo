<template>
  <h1 data-cy="title">Let's start by getting to know you</h1>
  <h2>We need a few details</h2>

  <div class='some-page-wrapper'>
    <div class='row'>
      <div class='column'>
        <div class='blue-column'>
          <el-input v-model="firstName" placeholder="first Name"/>
        </div>
      </div>
      <div class='column'>
        <div class='green-column'>
          <el-input v-model="lastName" placeholder="Last Name"/>
        </div>
      </div>
    </div>
    <div class='row'>
      <div class='column'>
        <div class='blue-column'>
          <el-input v-model="email" placeholder="Email" />
        </div>
      </div>
      <div class='column'>
        <div class='green-column'>
          <el-input v-model="zipCode" placeholder="Zip Code" />
        </div>
      </div>
    </div>

    <div class='row'>
      <div class='column'>
        <div class='blue-column'>
          <el-date-picker v-model="birthDate" type="date" placeholder="birthdate" />
        </div>
      </div>
      <div class='column'>
        <div class='green-column'>
          <el-select v-model="status" class="m-2" placeholder="Status">
            <el-option
                v-for="item in statusOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
          <el-select v-model="children" class="m-2" placeholder="Children">
            <el-option
                v-for="item in statusOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
        </div>
      </div>
    </div>
  </div>


  <h3>Great to meet you here</h3>
  <h4>We love our Massachusetts.We're in San Diago, California by the way.</h4>
  <div>
    <el-button type="primary" text>Sign Out</el-button>
    <el-button type="primary" bg>Continue</el-button>
  </div>
</template>

<script>
export default {
  name: 'PersonalDetails',
  data() {
    return {
      firstName: null,
      lastName: null,
      email: null,
      zipCode: null,
      birthDate: null,
      status: null,
      children: null,
      statusOptions: [
        {
          value: 'headOfHouseHold',
          label: 'Head of Household',
        },
        {
          value: 'married',
          label: 'Married',
        },
        {
          value: 'single',
          label: 'Single',
        },
        {
          value: 'seperated',
          label: 'Seperated',
        },
        {
          value: 'divorced',
          label: 'Divorced',
        },
      ],
      childrenOptions: [
        {
          value: 0,
          label: '0',
        },
        {
          value: 1,
          label: '1',
        },
        {
          value: 2,
          label: '2',
        },
        {
          value: 3,
          label: '3',
        },
        {
          value: 4,
          label: '4',
        },
        {
          value: 5,
          label: '5',
        },
      ]

    }
  }
}



</script>

<style scoped>
.some-page-wrapper {
  margin: 15px;
}

.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
  width: 100%;
}

.column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
}


.blue-column {
}

.green-column {
}
</style>
