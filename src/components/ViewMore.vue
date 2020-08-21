<template>
    <div>
        <NavBar />
        <div>
            <v-container>
                <v-row>
                    <v-col v-for="(item,i) in items" :key="i">
                        <v-card max-width="2000px">
                            <v-img
                                max-width="3000px"
                                class="image"
                                src="https://www.domusweb.it/content/dam/domusweb/en/news/gallery/2019/10/01/space-x-unveils-the-starship-that-will-carry-humans-to-the-moon-and-mars/domus-rocket-musk-starship-1.jpg"
                            ></v-img>
                            <v-card>
                                <v-row>
                                    <v-card-text>
                                        <span class="time">{{item.time}}</span>
                                        <v-card-title class="card__title">{{item.title}}</v-card-title>
                                        <v-card-subtitle class="card__subtitle">{{item.text}}</v-card-subtitle>
                                    </v-card-text>
                                </v-row>
                            </v-card>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>
<script lang="ts">
import NavBar from "../components/NavBar.vue";
import { Vue, Component } from "vue-property-decorator";
@Component({
    components: {
        NavBar,
    },
})
export default class AnonymousComponent extends Vue {
    items = [
        {
            time: "May 01, 2020",
            title: "Arrived Monn",
            src:
                "https://spacenews.com/wp-content/uploads/2020/07/Screen-Shot-2020-07-20-at-5.30.16-PM-879x485.png",

            flex: 6,
            text: "ok",
        },
    ];
}
</script>
<style lang="scss">
$font-size-small: 20px;
.time {
    font-size: $font-size-small;
    font-weight: 300;
    color: #8b939b;
    margin-left: 20px;
}
.card__title {
    font-weight: 800;
    font-size: 40px;
    margin-bottom: 10px;
}
.image {
    background-size: cover;
}
.card__subtitle {
    font-weight: 600;
    font-size: 1rem;
}
</style>