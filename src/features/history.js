import { createSlice, nanoid} from "@reduxjs/toolkit"


const storedvalue = JSON.parse(localStorage.getItem('History'));



const initialState = {
    historydata :  storedvalue? storedvalue : []
}

export const historySlice = createSlice({
    name : 'history',
    initialState,
    reducers : {
        addHistoryData: (state , action) => {
            
            const currentDate = new Date();

            const dateFormatOptions = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
            };
            const fdate = new Intl.DateTimeFormat('en-US', dateFormatOptions).format(currentDate);

            const timeFormatOptions = {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true
            };
            const ftime = new Intl.DateTimeFormat('en-US', timeFormatOptions).format(currentDate);

            console.log(fdate)
            console.log(ftime)
                
            const Hdata = {id:nanoid(),date:fdate,time:ftime,query: action.payload.query, result: action.payload.result}
            state.historydata = [Hdata,...state.historydata]
            localStorage.setItem('History',JSON.stringify(state.historydata))
            
    },
    clearHistoryData : (state,action) => {
        state.historydata=[]
    }
}
})

export const {addHistoryData, clearHistoryData} = historySlice.actions

export default historySlice.reducer