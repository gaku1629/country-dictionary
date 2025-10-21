import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getCountryInfo } from '@/services/api/get/countryInfo';

export const useFlagsStore = defineStore('flags', () => {
    state: () => ({
        flags: ref([]),
        flag: ref(null),
    })

    actions: {
        getFlagsApi (){
            const result = getCountryInfo();
            flags.value = result.flags.value;
        }

        selectFlag (){
            flag = flags.value.filter((flag) => flag.)
        }


    }
    console.log(getFlagInfro);
})
