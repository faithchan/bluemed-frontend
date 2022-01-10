import { createContext} from "react";

const LoginContext= createContext({});
const adminContext= createContext({});
const userIDContext= createContext({});
const patientData  = createContext({})


export {LoginContext, adminContext, userIDContext, patientData}