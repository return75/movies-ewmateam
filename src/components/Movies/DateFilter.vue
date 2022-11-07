<template>
  <div style="max-width: 100%">
    <q-input
      @click="openDatePicker"
      outlined rounded v-model="dateRangeInput"
      style="width: 500px; max-width: 100%"
      label="search movies by date"
    >
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy @hide="emitDateChange" ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date v-model="dateRange" range :options="disableFutureDates">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
      <template v-slot:prepend v-if="dateRange.from">
        <q-icon name="clear" class="cursor-pointer" @click.prevent="clearDateRange">
          <q-tooltip>remove date filter</q-tooltip>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>
import { date } from 'quasar'
const now = Date.now()
const formattedDate = date.formatDate(now, 'YYYY/MM/DD')


export default {
  name: "DateFilter",
  data: () => ({
    dateRange: { from: '', to: '' },
  }),
  methods: {
    clearDateRange() {
      this.dateRange = {from: '', to: ''}
    },
    disableFutureDates(date) {
      return date <= formattedDate
    },
    openDatePicker() {
      this.$refs.qDateProxy.show()
    },
    emitDateChange() {
      console.log('emit', this.dateRange)
      this.$emit('updated:from', this.dateRange.from.replaceAll('/', '-'))
      this.$emit('updated:to', this.dateRange.to.replaceAll('/', '-'))
    }
  },
  computed: {
    dateRangeInput() {
      if(!this.dateRange) return ''

      if (this.dateRange.from && this.dateRange.to) {
        return `${this.dateRange.from} - ${this.dateRange.to}`
      } else {
        return ''
      }
    }
  },
}
</script>
