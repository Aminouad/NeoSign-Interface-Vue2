<template>
  <div
    class="dropdown"
    @click="toggleRiskLevels"
    :style="[
      { '--options-height': optionsHeight + 'px' },
      { '--option-height': optionHeight + 'px' },
      { '--main-el-border-radius': borderRadius },
      { '--dropdown-width': width + 'px' },
      { '--dropdown-background-color': backgroundColor },
      { '--dropdown-border': border },
      { '--dropdown-default-text-color': textColor },
    ]"
  >
    <span class="text">
      Options
    </span>
    <i class="angle-down"></i>
    <div v-if="isBottomSectionToggled" class="options">
      <div
        v-for="option in configOptions"
        :key="option"
        class="option"
        @click="setCurrentSelectedOption(option)"
      >
        {{ option.value }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isBottomSectionToggled: false,
      optionsHeight: 0,
      optionHeight: 40,
      width: 70,
      configOptions: [],
    };
  },
  components: {},
  props: ["listOfItem"],
  computed: {},
  methods: {
    toggleRiskLevels() {
      this.isBottomSectionToggled = !this.isBottomSectionToggled;
    },
    setCurrentSelectedOption(option) {
      this.$emit("setSelectedOption", option);
    },
    
    setConfigData() {
      this.configOptions = this.listOfItem.options;
      this.width = this.listOfItem.width;
      this.placeholder = this.listOfItem.placeholder;
      if (this.listOfItem.backgroundColor) {
        this.backgroundColor = this.listOfItem.backgroundColor;
      }
      if (this.listOfItem.border) {
        this.border = this.listOfItem.border;
      }
      if (this.listOfItem.hoverBackgroundColor) {
        this.hoverBackgroundColor = this.listOfItem.hoverBackgroundColor;
      }
      if (this.listOfItem.textColor) {
        this.textColor = this.listOfItem.textColor;
      }
      if (this.listOfItem.borderRadius) {
        this.borderRadius = this.listOfItem.borderRadius;
      }
    },
    setOptionsHeight() {
      this.optionsHeight = this.optionHeight * this.configOptions.length;
    },
  },
  created() {
    this.setConfigData();
    this.setOptionsHeight();
  },
  beforeUdate() {
    // this.setOptionsHeight();
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
// * * binded style variables * *
// --options-height --> dynamic options menu height
// --option-height --> dynamic single option item height
// --dropdown-width --> dynamic dropdown & options drawer width

// * * * Variables * * *
$default-border-radius: 4px;
$default-text-hover-color: white;
$default-hover-color: #00b1b2;
$default-text-color: #fff;

.dropdown {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 0.4em;
  position: relative;
  border-radius: var(--main-el-border-radius);
  cursor: pointer;
  background: #00b1b2;
  user-select: none;

  .angle-down {
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid $default-text-color;
    background: transparent;
    border-width: 0 2px 2px 0;
    padding: 0.1em;
    width: 0.05em;
    height: 0.05em;
    margin: -1px 3px 0 5px;
    border-color: white;
    transform: rotate(45deg);
  }
  .text {
    display: flex;
    font-size: 70%;
    color: white;
  }
  .options {
    margin-top: -7.5%;
    display: flex;
    flex-direction: column;
    width: 110%;
    position: absolute;
    left: -1px;
    top: calc(var(--option-height));
    z-index: 1;
    background: var(--dropdown-background-color);
    border-bottom: var(--dropdown-border);
    border-left: var(--dropdown-border);
    border-left: var(--dropdown-border);

    border-radius: var(--main-el-border-radius);
    .option {
      display: flex;
      align-items: center;
      padding: 0 8px;
      height: 2em;
      color: white;
      font-size: 70%;
    }
    .option:hover {
      color: #00b1b2;
      background: white;
      transition: all 0.7s;
    }
    .option:last-child {
      border-radius: 0 0 4px 4px;
    }
  }
  .shown {
    border: var(--dropdown-border);
    max-height: 999px;
    transition: all 1s linear;
  }
}

.dropdown-shown {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

// Smartphones - Landscape + Portrait
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
}
</style>
