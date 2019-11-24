<template>
    <v-container>
        <v-row justify="space-between" class="mt-10">
            <v-col cols="12" md="4">
                <v-form ref="form">
                    <v-text-field
                            v-model="title"
                            label="Title"
                            required
                    ></v-text-field>
                    <v-text-field
                            v-model="location"
                            label="Location"
                            required
                    ></v-text-field>
                </v-form>
            </v-col>

            <v-col cols="12" md="6">
                <v-slider
                        v-model="max"
                        label="Max temperature"
                        thumb-label="always"
                        :thumb-size="24"
                        :thumb-color="'red'"
                        :track-fill-color="'red'"
                        :track-color="'grey'"
                        max="150"
                        min="-50"
                >
                </v-slider>

                <v-slider
                        v-model="min"
                        label="Min temperature"
                        thumb-label="always"
                        :thumb-size="24"
                        :thumb-color="'blue'"
                        :track-fill-color="'blue'"
                        :track-color="'grey'"
                        max="150"
                        min="-50"
                ></v-slider>

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "EditThermostat",

        data: () => ({
            title: '',
            location: '',
            max: null,
            min: null,
        }),
        methods: {
            /// cia copy pasta
            submit () {
                this.$v.$touch()
            },
            clear () {
                this.title = '';
                this.location = '';
                this.max = null;
                this.min = null;
            },
        },
    }
</script>

<style scoped>

</style>