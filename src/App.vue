<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" app>
            <v-list @click="drawer" dense>
                <v-list-item @click="displayedComponentIndex = 0">
                    <v-list-item-action>
                        <v-icon>fas fa-home</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Dashboard</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item @click="displayedComponentIndex = 1">
                    <v-list-item-action>
                        <v-icon>fas fa-th-list</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>List</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item @click="displayedComponentIndex = 2">
                    <v-list-item-action>
                        <v-icon>fas fa-edit</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Edit</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app color="indigo" dark>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Application</v-toolbar-title>
        </v-app-bar>

        <v-content v-if="displayedComponentIndex === 0">
            <show-thermostats></show-thermostats>
        </v-content>
        <v-content v-if="displayedComponentIndex === 1">
            <create-thermostat></create-thermostat>
        </v-content>
        <v-content v-if="displayedComponentIndex === 2">
            <edit-thermostat></edit-thermostat>
        </v-content>

        <v-footer color="indigo" app>
            <span class="white--text">&copy; 2019</span>
        </v-footer>
    </v-app>
</template>

<script>
    import ShowThermostats from "./components/ShowThermostats";
    import CreateThermostat from './components/CreateThermostat';
    import EditThermostat from "./components/EditThermostat";

    export default {
        components: {
            showThermostats: ShowThermostats,
            createThermostat: CreateThermostat,
            editThermostat: EditThermostat
        },
        data: () => ({
            count: 0,
            drawer: true,
            displayedComponentIndex: 0,
        }),
    }
</script>