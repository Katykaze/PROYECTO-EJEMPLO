<!-- https://github.com/romainsimon/vue-simple-search-dropdown/blob/master/docs/index.html -->
<template>
  <div class="dropdown">
    <!-- Dropdown Input -->
    <input class="dropdown-input"
      :name="name"
      @focus="showOptions()"
      @blur="exit()"
      v-model="selectedOption"
      :disabled="disabled"
      :placeholder="placeholder" />

    <!-- Dropdown Menu -->
    <div class="dropdown-content" v-show="optionsShown">
      <div class="dropdown-item"
        @click="selectOption(option)"
        v-for="(option, index) in options"
        :key="index">
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    name: {
      type: String,
      default: 'dropdown'
    },
    options: {
      type: Array,
      required: true
    },
    placeholder: {
      type: String,
      default: 'Please select an option'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selectedOption: '',
      optionsShown: false
    }
  },
  methods: {
    selectOption(option) {
      this.selectedOption = option.name;
      this.optionsShown = false;
      this.$emit('selected', option);
    },
    showOptions() {
      if (!this.disabled) {
        this.optionsShown = true;
      }
    },
    exit() {
      this.optionsShown = false;
    }
  }
};
</script>

<style scoped>
.dropdown {
  position: relative;
  display: block;
}

.dropdown-input {
  background: #fff;
  cursor: pointer;
  border: 1px solid #e7ecf5;
  border-radius: 3px;
  color: #333;
  display: block;
  font-size: .8em;
  padding: 6px;
  min-width: 250px;
  max-width: 250px;
}

.dropdown-content {
  position: absolute;
  background-color: #fff;
  min-width: 248px;
  max-width: 248px;
  border: 1px solid #e7ecf5;
  z-index: 1;
}

.dropdown-item {
  color: black;
  font-size: .7em;
  line-height: 1em;
  padding: 8px;
  cursor: pointer;
}

.dropdown-item:hover {
  background-color: #e7ecf5;
}
</style>
