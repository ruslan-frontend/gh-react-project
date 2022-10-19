export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';


export const addItem = (payload) => ({
    type: ADD_ITEM,
    payload 
});

export const removeItem = (payload) => ({
    type: REMOVE_ITEM,
    payload 
});
