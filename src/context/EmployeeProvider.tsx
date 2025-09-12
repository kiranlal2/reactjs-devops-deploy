import { useState } from "react";
import type { ReactNode } from "react";
import { EmployeeContext } from "./EmployeeContext";

interface EmployeeProviderProps {
  children: ReactNode;
}

export function EmployeeProvider({ children }: EmployeeProviderProps) {
  const [employeDetails, setEmployeDetails] = useState({
    name: "Kiran lal J",
    age: 30,
    position: "React Engineer",
    department: "Development",
    location: "New York",
    experience: 5,
  });

  return (
    <EmployeeContext.Provider value={{ employeDetails, setEmployeDetails }}>
      {children}
    </EmployeeContext.Provider>
  );
}

export default EmployeeProvider;
