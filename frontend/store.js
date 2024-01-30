import { createWithEqualityFn } from 'zustand/traditional'
import { shallow } from 'zustand/shallow'
import { devtools, persist } from 'zustand/middleware'

const store = (set) => ({
  dice: [],
  showDie: null,
  addDie: async (data) => {
    const res = await fetch("http://localhost:9292/dice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        description: data.description,
        type_of_die: data.type_of_die,
        image_url: data.image_url
      })
    });
    const newDie = res.json();
    set(store => ({ dice: [...store.dice, newDie] }), false, 'addDie');
  },
  editDie: async ({ id, data }) => {
    const res = await fetch(`http://localhost:9292/dice/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        description: data.description,
        image_url: data.image_url
      })
    });
    const updatedDie = res.json();
    set(store => ({ dice: store.dice.map(d => d.id === id ? updatedDie : d) }), false, 'editDie');

  },
  deleteDie: (id) => {
    fetch(`http://localhost:9292/dice/${id}`, {
      method: "DELETE",
    });
    set(store => ({ dice: store.dice.filter(d => d.id !== id) }), false, 'deleteDie');
  },
  setShowDie: (id) => set({ showDie: dice.find(d => d.id === id) }, false, 'setShowDie')
})

export const useStore = createWithEqualityFn(persist(devtools(store), { name: "store" }), shallow)