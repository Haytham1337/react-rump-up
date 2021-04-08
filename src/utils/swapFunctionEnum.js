import {functionsEnumMomentJs,functionsEnumDateFns} from '../config/constants/functionsEnum';

export const swapFunctionEnum = (val) => val==='momentJs' ? functionsEnumMomentJs : functionsEnumDateFns;