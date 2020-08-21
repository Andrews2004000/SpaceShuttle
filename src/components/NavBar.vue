<template>
    <div>
        <v-app-bar app class="black">
            <span class="fa fa-bars bars__icon" @click="drawer = !drawer"></span>
            <v-toolbar-title>
                <span class="title1">Space</span>
                <span class="title2">News</span>
            </v-toolbar-title>
            <div class="list__container">
                <a>
                    <span class="items">Flight</span>
                </a>
                <a>
                    <span class="items">Future</span>
                </a>
                <a>
                    <span class="items">Rockets</span>
                </a>
                <a>
                    <span class="items">SpaceFlight</span>
                </a>
                <a>
                    <span class="items">Humans Space</span>
                </a>
            </div>

            <v-spacer></v-spacer>
            <span class="user__icon fa fa-user"></span>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" class="nav" dark app color="secondary">
            <v-btn class="ma-3 btn__homepage" color="darken" dark router-view to="/">
                <span dark left class="fa fa-arrow-left icon__arrow"></span>Back To HomePage
            </v-btn>
            <div class="nav__user__info">
                <v-img class="nav__user__info__photo"></v-img>
                <span class="nav__user__info__title">UserName</span>
            </div>
            <v-list class="nav__list">
                <v-list-item v-for="(item,i) in items" :key="i" class="nav__container__items">
                    <v-list-item-title class="nav__list__items">{{item}}</v-list-item-title>
                </v-list-item>
            </v-list>
            <v-spacer></v-spacer>
            <v-btn class="red btn__logout">Logout</v-btn>
        </v-navigation-drawer>
    </div>
</template>
<script lang="ts">
import { Vue } from "vue-property-decorator";
export default class AnonymousComponent extends Vue {
    drawer = false;
    items = ["Falcon 9", "Falcon Heavy", "RideShare"];
}
</script>
<style lang="scss">
$color-white: #fff;
$color-orange: orangered;
$font-weight-title: 100;
$font-size-title: 2.5rem;
$font-size-medium: 1.6rem;
$font-size-small: 1rem;
$font-size-list-items: 18px;
.list__container {
    width: 40rem;
    height: 2rem;
}
.title1 {
    color: $color-white;
    font-weight: $font-weight-title;
    margin-right: 0.2rem;
    font-size: $font-size_title;
}
.title2 {
    color: $color-orange;
    font-weight: $font-weight-title;
    font-size: $font-size-title;
}
.user__icon {
    color: $color-white;
    font-size: $font-size-medium;
    cursor: pointer;
}

.items {
    font-size: $font-size-list-items;
    margin: 7px 0.5rem 0 2rem;
    color: $color-white;
    display: inline-block;
    font-weight: 500;
    transition: color 1.5s;
}
.icon__arrow {
    margin: 0 5px 0 0;
}
.btn__homepage {
    position: absolute;

    top: 0;
    left: 0;
    width: 100%;
}
.items::after {
    content: "";
    background-color: #fff;
    display: block;
    transition: all 0.2s;
    position: relative;
    height: 1px;
    width: 0%;
}
.items:hover::after {
    animation: BorderBottonLeftToRight 1s ease-in-out;
}
@keyframes FromLeftToRight {
    0% {
        width: 0%;
        height: 0%;
        opacity: 0;
    }
    80% {
        width: 100%;

        height: 70%;
        opacity: 1;
    }
    100% {
        width: 0%;
        height: 0%;
        opacity: 0;
    }
}
@keyframes BorderBottonLeftToRight {
    0% {
        width: 0;

        opacity: 0;
    }
    80% {
        width: 100%;

        opacity: 1;
    }
    100% {
        width: 0;

        opacity: 0;
    }
}
.bars__icon {
    color: $color-white;
    font-size: 1.2em;
    margin: 0 10px 0 0;
    cursor: pointer;
}
.nav {
    width: 100%;
    height: 100%;
    &__container__items {
        width: 100%;
        height: 100%;
    }
    &__user__info {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 5rem 0 0 0;

        &__photo {
            width: 7rem;
            height: 7rem;
            border-radius: 50%;
            display: block;
            background-color: $color-white;
        }
        &__title {
            color: $color-white;
            font-weight: 700;
            font-size: 2rem;
            margin: 10px 0 0 0;
        }
    }
    &__list {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

        &__items {
            font-size: $font-size-small;
            padding: 10px 0 0 0;
            font-weight: 300;
            text-transform: uppercase;
            transition: all 1.2s;
            width: 100%;

            margin-left: 5rem;
            color: #f2a52b !important;

            z-index: 1000;

            // transform: translateX(50px);
            &:not(:last-child) {
                margin-bottom: 7px;
            }

            &::before {
                content: "";
                transform: scaleY(0);
                transition: transform 0.2s,
                    width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s;

                display: inline-block;
                background-color: #f8f8ff;

                position: absolute;
                left: 0;
                top: 7px;

                transform: translateX(-100px);
                z-index: -1;
                width: 3px;

                height: 100%;
            }
        }
    }
}
.nav__list__items:hover::before {
    //animation: FromLeftToRight 1.5s ease-in-out;
    transform: scaleY(1);
    width: 100%;
}
.btn__logout {
    position: absolute;
    bottom: 1rem;
    left: 5rem;
}
.btn__homepage {
    width: 70%;
    margin-left: 60px;
    margin-top: 20px;
}
.content {
    width: 100%;
    height: 100%;
}
</style>