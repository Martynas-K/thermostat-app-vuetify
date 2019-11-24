<template>
    <v-card>
        <v-list two-line subheader>
            <v-subheader class="white--text font-italic font-weight-bold"
                         :class="{'green': isActive, 'grey': !isActive}"
                         dark
            >
                <v-switch v-model="isActive" :label="isActiveFormatted"></v-switch>
            </v-subheader>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>{{ this.title }}</v-list-item-title>
                    <v-list-item-subtitle>Location: {{ this.location}}</v-list-item-subtitle>
                    <v-list-item-subtitle>Feeling: {{setTempStatus.feeling}}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                    <p class="display-2">{{temperatureFormatted}}</p>
                </v-list-item-action>
            </v-list-item>
        </v-list>
        <v-card-actions>
            <v-btn
                   class="mx-3"
                   rounded color="blue darken-1" dark
                   @click.exact="onDecrease"
                   @click.ctrl.exact="onDecrease5"
                   :disabled="temperature === min || !isActive">
                <v-icon>fas fa-arrow-circle-down</v-icon>
            </v-btn>
            <v-slider
                    class="mt-6"
                    v-model="temperature"
                    :color="setTempStatus.color"
                    :track-color="sliderSpecs.trackColor"
                    :min="this.min"
                    :max="this.max"
                    :disabled="!isActive"
            ></v-slider>
            <v-btn
                    class="mx-3"
                    rounded color="red darken-4" dark
                    @click.exact="onIncrease"
                    @click.ctrl.exact="onIncrease5"
                    :disabled="temperature === max || !isActive">
                <v-icon>fas fa-arrow-circle-up</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: "Thermostat",

        props: {
            min: { type: Number },
            max: { type: Number },
            title: { type: String},
            location: { type: String},
        },
        data: () => ({
            isActive: false,
            temperature: 20,
            sliderSpecs: {
                color: 'grey',
                trackColor: 'grey',
            },
        }),
        computed: {
            isActiveFormatted() {
                return this.isActive ? "ON" : "OFF"
            },
            temperatureFormatted() {
                if (this.isActive) {
                    return `${this.temperature > 0 ? '+':''}${this.temperature} °C`
                } else {
                    return "N/A"
                }
            },
            setTempStatus() {
                let feeling = 'fucking freezing';
                let color;
                switch (true) {
                    case (this.temperature > (this.max - (this.max - this.min) * .15)):
                        feeling = 'very hot';
                        color = 'red darken-4';
                        break;
                    case (this.temperature > (this.max - (this.max - this.min) * .30)):
                        feeling = 'hot';
                        color = 'red darken-1';
                        break;
                    case (this.temperature > (this.max - (this.max - this.min) * .45)):
                        feeling = 'could be worse';
                        color = 'orange darken-2';
                        break;
                    case (this.temperature > (this.max - (this.max - this.min) * .60)):
                        feeling = 'chilly';
                        color = 'yellow darken-1';
                        break;
                    case (this.temperature > (this.max - (this.max - this.min) * .75)):
                        feeling = 'cold';
                        color = 'light-blue lighten-2';
                        break;
                    case (this.temperature > (this.max - (this.max - this.min) * .90)):
                        feeling = 'very cold';
                        color = 'blue darken-1';
                        break;
                }
                return {feeling, color};
            }
        },
        methods: {
            onDecrease() {
                if(this.temperature > this.min) {
                    this.temperature--;
                }
            },
            onDecrease5() {
                if(this.temperature > this.min ) {
                    this.temperature-=5;
                }
            },
            onIncrease() {
                if(this.temperature < this.max) {
                    this.temperature++;
                }
            },
            onIncrease5() {
                if(this.temperature < this.max ) {
                    this.temperature+=5;
                }
            },
        }
    }
</script>

<style scoped>
</style>