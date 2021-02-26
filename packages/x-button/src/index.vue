<template>
    <button
        class="de-button"
        @click="handleClick"
        :disabled="buttonDisabled || loading"
        :class="[
        type ? 'de-button--' + type : '',
        buttonSize ? 'de-button--' + buttonSize : '',
        {
            'is-disabled': buttonDisabled,
            'is-loading': loading,
            'is-plain': plain,
            'is-round': round,
            'is-circle': circle
        }
        ]"
    >
        <i class="iconfont iconfont--loading" v-if="loading">&#xe601;</i>
        <i class="iconfont" v-if="icon && !loading">{{icon}}</i>
        <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>
  export default {
    name: 'de-button',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: String,
      icon: {
        type: String,
        default: ''
      },
      loading: Boolean,
      disabled: Boolean,
      plain: Boolean,
      round: Boolean,
      circle: Boolean
    },
    computed: {
      _deFormItemSize() {
        return (this.elFormItem || {}).elFormItemSize;
      },
      buttonSize() {
        return this.size || this._deFormItemSize || (this.$DEFAULT || {}).size;
      },
      buttonDisabled() {
        return this.disabled;
      }
    },
    methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      }
    }
  };
</script>

<style lang="scss" scoped>
@import './../../style/colors.scss';
@import "./../../style/iconfont/iconfont.css";
.iconfont {
    font: {
        size: .6rem;
        weight:normal;
    }
    margin-right: .1rem;
    vertical-align: middle;
}
.iconfont--loading {
    display: inline-block;
    animation: trun 3s linear infinite;
}
@keyframes trun {
    0%{transform:rotate(0deg);}
    25%{transform:rotate(90deg);}
    50%{transform:rotate(180deg);}
    75%{transform:rotate(270deg);}
    100%{transform:rotate(360deg);}
}
.de-button {
    width: 100%;
    height: 1.66rem;
    text-align: center;
    span {
        // display: inline-block;
        vertical-align: middle;
    }
}

.de-button--default {
    width: 100%;
    background: $color-red;
    color: $color-white;
    font-size: .6rem;
}

.de-button--medium {
    width: 80%;
}
.de-button--small {
    width: 60%;
}
.de-button--mini {
    width: 30%;
    height: 1rem;
    font-size: .4rem;
}

.is-circle {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    overflow: hidden;
}

.is-round {
    border-radius: 1.1rem;
    overflow: hidden;
}

.is-plain, .is-plain:focus, .is-plain:hover {
    background-color: #fff;
    color: $color-red;
    
}

.is-disabled, .is-disabled:focus, .is-disabled:hover {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
    border: 1px solid #ebeef5;
}

</style>