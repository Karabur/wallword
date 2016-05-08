import {Map, Record} from 'immutable'

export interface AppState {
}

export interface AppStateRecord extends Map<any, any>, AppState{

}

const AppStateRecordStatic = Record({

})

export const initialState: AppStateRecord = new AppStateRecordStatic()
