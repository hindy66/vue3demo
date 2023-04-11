<!--
 * @Author: hindy 794310672@qq.com
 * @Date: 2023-03-07 14:26:37
 * @LastEditors: hindy 794310672@qq.com
 * @LastEditTime: 2023-03-07 14:26:54
 * @FilePath: \eribbit\src\views\home\components\HomePanel.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="home-panel">
      <div class="container">
        <div class="head">
          <h3>{{ title }}<small>{{ subTitle }}</small></h3>
          <slot name="right" />
        </div>
        <slot />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePanel',
    props: {
      title: {
        type: String,
        default: ''
      },
      subTitle: {
        type: String,
        default: ''
      }
    }
  }
  </script>
  
  <style scoped lang='scss'>
  .home-panel {
    background-color: #fff;
    .head {
      padding: 40px 0;
      display: flex;
      align-items: flex-end;
      h3 {
        flex: 1;
        font-size: 32px;
        font-weight: normal;
        margin-left: 6px;
        height: 35px;
        line-height: 35px;
        small {
          font-size: 16px;
          color: #999;
          margin-left: 20px;
        }
      }
    }
  }
  </style>