import Vue from "vue";

/*import th from "element-ui/src/locale/lang/th";*/

const budget = {
    namespaced: true,
    state: {
        list: {
            1: {
                type: 'INCOME',
                value: 100,
                commentary: 'Some comment 1',
                id: 1,
            },
            2: {
                type: 'INCOME',
                value: 150,
                commentary: 'Some comment 2',
                id: 2,
            },
            3: {
                type: 'OUTCOME',
                value: 100,
                commentary: 'Some comment 3',
                id: 3,
            },
            4: {
                type: 'INCOME',
                value: 120,
                commentary: 'Some comment 4',
                id: 4,
            },
            5: {
                type: 'OUTCOME',
                value: 30,
                commentary: 'Some comment 5',
                id: 5,
            },
        }
    },
    getters: {
        budgetList: ({list}) => Object.values(list),
    },
    mutations: {
        ADD_BUDGET(state, budget){
            Vue.set(state.list, budget.id, budget);
            state.list[budget.id] = budget;
        },
        REMOVE_BUDGET(state, id){
            Vue.delete(state.list, id);
        }
    },
    actions: {
        addBudgetItem({commit}, data) {
            if (data.type === "OUTCOME") {
                if (Math.sign(data.value) >= 0) {
                    data.value = -data.value;
                }
            } else {
                data.value = Math.abs(data.value);
            }

            const newObj = {
                ...data,
                id: Math.random(),
            };

            commit('ADD_BUDGET', newObj);
        },
        removeBudgetItem({commit}, id) {
            commit('REMOVE_BUDGET', id);
        }
    },
};

export default budget;