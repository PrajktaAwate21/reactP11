import React,{createContext, useState} from 'react'
import Employees from './Employees'

export const employeeContext = createContext()

function EmployeeStore() {
    const [employee,setEmployee]=useState([])

    //Aad employee data to global state 
    const addEmp =(edata)=>{
        setEmployee([...employee,edata])
    }

    //update employee details
    const updateEmp = (empObj)=>{

        //logic need to be re check 
        employee.filter((e)=>{
            if(e.id === empObj.id){
                e = empObj
                setEmployee([...employee])
            }
        })
    }

    //delete employee 
    const deleteEmp = (id)=>{
        //deleted logic
    }


  return (
    <employeeContext.Provider value={{employee,addEmp,updateEmp,deleteEmp}}>
        <Employees/>
      </employeeContext.Provider>
   
  )
}

export default EmployeeStore
