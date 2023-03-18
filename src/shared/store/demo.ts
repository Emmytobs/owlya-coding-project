import { createReducer, createAction, on } from "@ngrx/store";

const initialState = {
    message: "Hey!"
}

const switchTranslation = createAction("[message] Switch translation")

export const demoReducer = createReducer(
    initialState,
    on(switchTranslation, (state) => ({ message: "Hej!" }))
)