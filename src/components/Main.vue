<template>
    <div class="black">
        <NavBar />
        <div class="container black">
            <v-row>
                <v-col v-for="(card) in cards" :key="card.title" :cols="card.flex">
                    <v-card class="pa-5 mx-auto pcontainer__card" max-width="400" tile>
                        <div>
                            <v-card-text>
                                <v-card-title class="container__card__title">{{card.title}}</v-card-title>
                                <v-img :src="card.src" height="200px"></v-img>
                                <v-card-subtitle>{{card.text}}</v-card-subtitle>
                                <v-btn class="container__card__button" color="primary">View More</v-btn>
                            </v-card-text>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import NavBar from "../components/NavBar.vue";
@Component({
    components: {
        NavBar,
    },
})
export default class AnonymousComponent extends Vue {
    cards = [
        {
            title: "Arrived Monn",
            src:
                "https://spacenews.com/wp-content/uploads/2020/07/Screen-Shot-2020-07-20-at-5.30.16-PM-879x485.png",

            flex: 6,
            text:
                "If the provided aspect ratio doesn't match that of the actual image, the default behavior is to fill as much space as possible, clipping the sides of the image.",
        },
        {
            title: "Favorite road trips",
            src:
                "https://cdn.cnn.com/cnnnext/dam/assets/191111100550-01-spacex-launch-1111-exlarge-169.jpg",
            flex: 6,
            text:
                "If the provided aspect ratio doesn't match that of the actual image, the default behavior is to fill as much space as possible, clipping the sides of the image.",
        },
        {
            title: "Best airlines",
            src:
                "https://aliveuniverse.today/media/k2/items/cache/9ab257875e071eb99bbac5fecacacf3b_XL.jpg",
            flex: 6,
            text: "o",
        },
        {
            title: "Best airlines",
            src:
                "https://aliveuniverse.today/media/k2/items/cache/9ab257875e071eb99bbac5fecacacf3b_XL.jpg",
            flex: 6,
            text: "i",
        },
        {
            title: "Best airlines",
            src:
                "https://aliveuniverse.today/media/k2/items/cache/9ab257875e071eb99bbac5fecacacf3b_XL.jpg",
            flex: 6,
            text: "k",
        },
        {
            title: "Best airlines",
            src:
                "https://aliveuniverse.today/media/k2/items/cache/9ab257875e071eb99bbac5fecacacf3b_XL.jpg",
            flex: 6,
            text: "k",
        },
        {
            title: "Best airlines",
            src:
                "https://aliveuniverse.today/media/k2/items/cache/9ab257875e071eb99bbac5fecacacf3b_XL.jpg",
            flex: 6,
            text: "l",
        },
        {
            title: "Best airlines",
            src:
                "https://aliveuniverse.today/media/k2/items/cache/9ab257875e071eb99bbac5fecacacf3b_XL.jpg",
            flex: 6,
            text: "k",
        },
        {
            title: "Best airlines",
            src:
                "https://aliveuniverse.today/media/k2/items/cache/9ab257875e071eb99bbac5fecacacf3b_XL.jpg",
            flex: 6,
            text: "K",
        },
        {
            title: "Best airlines",
            src:
                "https://aliveuniverse.today/media/k2/items/cache/9ab257875e071eb99bbac5fecacacf3b_XL.jpg",
            flex: 6,
            text: "k",
        },
    ];
}
</script>
<style lang='scss'>
.container {
    background-size: cover;
    background-color: black;
    left: 0;
    right: 0;
    position: absolute;
    //overflow: auto;
    //background-image: url("../images/stars.jpg");

    &__card {
        // position: relative;
        background-color: white;
        &__title {
            font-size: 25px;
            font-weight: 800;
            //        position: absolute;
            //  left: 0;
            //  top: 1px;
        }
        &__button {
            width: 100%;
        }
    }
}
</style>

