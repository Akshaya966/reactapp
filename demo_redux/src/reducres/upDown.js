const initval = 0;

const upDown = (state = initval,action) =>{

    switch (action.type) {
        case "INCR"
                    return state=state+1
            break;
    
        default:
            break;
    }
}