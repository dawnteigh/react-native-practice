import { createWithEqualityFn } from 'zustand/traditional'
import { shallow } from 'zustand/shallow'
import { devtools, persist } from 'zustand/middleware'

const store = (set) => ({
  dice: [],
  showDie: null,
  addDie: async (data) => {
    const newDie = await fetch("http://localhost:9292/dice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        description: data.description,
        type_of_die: data.type_of_die,
        image_url: data.image_url
      }),
    })
    set(store => ({ dice: [...store.dice, newDie] }), false, 'addDie')
  },
  deleteTask: (title) => set(store => ({ tasks: store.tasks.filter(t => t.title !== title) }), false, 'deleteTask'),
  setShowDie: (id) => set({ showDie: dice.find(d => d.id === id) }, false, 'setShowDie')
})

export const useStore = createWithEqualityFn(persist(devtools(store), { name: "store" }), shallow)