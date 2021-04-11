export const getFunctionParamsObj = argsQuantity =>{
    const arr = [];
    for(let i=0;i<argsQuantity;i++){
    arr.push(`arg${i+1}`);
    }
    const obj = {};
    arr.forEach(item=>obj[item]='')
    return obj;
}
