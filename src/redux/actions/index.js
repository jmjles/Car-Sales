import {ADD_FEATURE,REMOVE_FEATURE} from './types'
export const addFeature = (data) => ({
    type:ADD_FEATURE,
    data
})
export const removeFeature = data => ({
    type: REMOVE_FEATURE,
    data
})