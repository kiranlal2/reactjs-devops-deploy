import { createContext } from "react";

type EmployeDetails = {
  name: string;
  age: number;
  position: string;
  department: string;
  location: string;
  experience: number;
};

export type EmployContextType = {
  employeDetails: EmployeDetails;
  setEmployeDetails: React.Dispatch<React.SetStateAction<EmployeDetails>>;
};

// ✅ Context only (no component here)
export const EmployeeContext = createContext<EmployContextType | undefined>(
  undefined
);
