export default function localStorageAvailable(){
    try {
        const key = '__some_random_key_which_you_are_not_going_to_use__'
        window.localStorage.setItem(key, key)

        window.localStorage.removeItem(key)

        return true
    } catch (error) {
        console.log(error)
        return false
    }
}