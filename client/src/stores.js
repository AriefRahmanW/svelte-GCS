import { writable } from 'svelte/store'

export const user = writable(localStorage.getItem("user") || "")

export const wp = writable([])

user.subscribe(val => localStorage.setItem("user", val))

