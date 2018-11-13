<script>
import Datepicker from "vuejs-datepicker";
import { ru } from "vuejs-datepicker/dist/locale";

import moment from "moment";

export default {
  data() {
    return {
      ru: ru,
      today: new Date(),
      selected: false,
      selectedDate: null
    };
  },
  computed: {
    highlightedFn: {
      get() {
        var self = this;
        return {
          customPredictor: function(date) {
            if (self.selected) {
              let dateDay = date.getDate();
              let selectedDay = self.selectedDate.getDate();
              let dateWeekDay = date.getDay();
              let selectedWeekDay = self.selectedDate.getDay();
              let dateMonth = date.getMonth();
              let selectedMonth = self.selectedDate.getMonth();

              if (
                dateWeekDay === selectedWeekDay &&
                dateMonth === selectedMonth &&
                dateDay >= selectedDay
              ) {
                return true;
              }
            }
          }
        };
      }
    }
  },
  methods: {
    customFormatter(date) {
      return moment(date).locale("ru").format("dddd");
    },
    getSelectedDay(date) {
      if (date.getDay() === date.getDay()) {
        this.selected = true;
        this.selectedDate = date;
      }
    }
  },
  components: {
    Datepicker
  }
};
</script>

<template>
    <datepicker 
        v-model="today" 
        :language="ru" 
        :monday-first="true" 
        calendar-class="datepicker__calendar" 
        input-class="datepicker__input" 
        :highlighted="highlightedFn" 
        :format="customFormatter" 
        @selected="getSelectedDay">
    </datepicker>
</template>

<style lang="css">
html {
  height: 100vh;
  width: 100%;
  overflow: hidden;
}
body {
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: "Open Sans", sans-serif;
}
.vdp-datepicker {
  padding-top: 100px;
  width: 400px;
  margin: 0 auto;
}
.vdp-datepicker > div {
  width: 400px;
}
.datepicker__input {
  display: inline-block;
  height: 30px;
  width: 100%;
  border: 1px solid #eee;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
}
.vdp-datepicker__calendar .cell.highlighted {
  background: PaleGreen;
}
.vdp-datepicker__calendar .cell.today {
  background: tomato !important;
  color: white;
}
</style>
