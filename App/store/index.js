export const state = () => ({
    activeBudgetId: 5,
    budgets: [
        { id: 1, name: 'Q2-Q4 2020 Budget' },
        { id: 2, name: 'Q1 2020 Budget' },
        { id: 3, name: 'Q4 2019 Budget' },
        { id: 4, name: 'Q3 2019 Budget' },
        { id: 5, name: 'Q1 2021 Budget' }
    ],
})

export const mutations = {
    setActiveBudgetId: (state, id) => {
        state.activeBudgetId = id
    }
}

export const getters = {
    getActiveBudget: state => {
        return state.budgets.find((budget) => {
            return budget.id == state.activeBudgetId
        })
    }
}

export const actions = {

}