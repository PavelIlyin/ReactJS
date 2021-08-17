import profileReducer from '../Store/Reducer/profile'
import { changeName, changeAge, changeShowName, changeIsAuthed } from '../Store/Action/profile'

describe('profile reducer test', () => {
    let state = {
        name: "Pavel",
        age: 31,
        showName: true,
        isAuthed: false,
    }
    it('name should be changed on Irina', () => {

        let newState = profileReducer(state, changeName('Irina'))
        expect(newState.name).toBe('Irina')

    })
    it('age should be changed on 31', () => {

        let newState = profileReducer(state, changeAge(31))
        expect(newState.age).toBe(31)
    })

    it('flag showName should be changed on false', () => {

        let newState = profileReducer(state, changeShowName())
        expect(newState.showName).toBeFalsy
    })

    it('flag isAuthed should be changed on true', () => {

        let newState = profileReducer(state, changeIsAuthed(true))
        expect(newState.isAuthed).toBeTruly
    })
})

