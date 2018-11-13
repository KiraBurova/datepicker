<script>
export default {
    props: ['assets']
}
</script>


<template>
    <div :class="$style.container">
        <table :class="$style.table">
            <thead :class="$style.table__header">
                <tr :class="$style.table__row">
                    <th :class="$style.table__head">Название</th>
                    <th :class="$style.table__head">Стоимость</th>
                    <th :class="[$style.table__head, $style.table__cap]">Рыночная капитализация</th>
                    <th :class="[$style.table__head, $style.table__vwap]">Суточный объем</th>
                </tr>
            </thead>
        <tbody :class="$style.table__body">
            <div :class="$style['table__body-inner']">
                <tr :class="$style.table__row" v-for="asset in assets" :key="asset.id">
                    <td data-label="Название" :class="$style.table__cell">{{asset.name}}</td>
                    <td data-label="Стоимость" :class="$style.table__cell">{{(asset.priceUsd)}}</td>
                    <td data-label="Рыночная капитализация" :class="[$style.table__cell, $style.table__cap]">${{Math.ceil(asset.marketCapUsd)}}</td>
                    <td data-label="Суточный объем" :class="[$style.table__cell, $style.table__vwap]">${{Math.ceil(asset.volumeUsd24Hr)}}</td>
                </tr>
            </div>
        </tbody>
        </table>
    </div>
</template>

<style lang="scss" module>
$black: #222222;
$white: #ffffff;
$accent: #fafafa;

.container {
    height: 10em;
}
.table {
    display: flex;
    flex-flow: column;
    width: 100%;  
    height: 100vh;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    
    &__header {
        display: table;
        flex: 0 0 auto;
        width: 100%;
        table-layout: fixed;
        background: $black;
        color: $white;
    }

    &__body {
        display: block;
        flex: 1 1 auto;
        overflow: hidden;
        &:hover, &:active {
            overflow-y: scroll;
        }
    }

    &__body-inner {
        width: 100vw;
    }

    &__row {
        display: table;
        width: 100%;
        table-layout: fixed;
        &:nth-child(2n) {
            background: $accent;
        }
    }   

    &__head,
    &__cell {
        padding: 1em;
    }

    &__cell {
        text-align: center;
    }
}

@media screen and (max-width: 715px) {
  .table {
    border: 0;

    &__body-inner {
        width: 98vw;
    }
    
    &__header {
        position: absolute;
        height: 1px;
        width: 1px;
        border: none;
        margin: -1px;
        padding: 0;
        clip: rect(0 0 0 0);
        overflow: hidden;
    }
    
    &__row {
        display: block;
        margin-bottom: .625em;
        border-bottom: 3px solid $accent;
    }
    
    &__cell {
        display: block;
        border-bottom: 1px solid $accent;
        font-size: .8em;
        text-align: right;

        &::before {
            content: attr(data-label);
            float: left;
            font-weight: bold;
            text-transform: uppercase;
        }

        &:last-child {
            border-bottom: 0;
        }
    }
  }
}

@media screen and (max-width : 320px) {
    .table {
        &__cap,
        &__vwap {
            display: none;
        }
    }
}
</style>
