import {createDraftSafeSelector} from '@reduxjs/toolkit'

export const table = state=>state.table;

export const tableSelector = createDraftSafeSelector(table,(state)=>state.tableNo)