<template>
    <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
            <v-col md="6">
                <h2 align="center" class="my-6"> The great big glorious list of Thermostats</h2>
                <thermostat min="-26" max="30" title="Thermostat 1" location="Fridge"></thermostat><br>
                <thermostat min="20" max="120" title="Thermostat 2" location="Sauna"></thermostat>
                <thermostat min="10" max="30" title="Thermostat 3" location="Living Room"></thermostat>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import Thermostat from './BaseThermostat';

    export default {
        name: "ShowThermostats",
        components: {
            thermostat: Thermostat,
        },
    }

</script>

<style scoped>

</style>