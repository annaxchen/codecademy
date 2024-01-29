// Imports functions and salaryData
import { getDataByRole, getDataByCompany } from "./salaryData.js";
import salaryData from "./salaryData.js";

// Calculates metrics by role and company based on imported salaryData and imported functions
const getAverageSalaryByRole = (role) => {
  const roleData = getDataByRole(role);
  //creates new array by mapping roleData salary
  const salariesOfRole = roleData.map((obj) => obj.salary);
  return calculateAverage(salariesOfRole);
};


const getAverageSalaryByCompany = (company) => {
  const companyData = getDataByCompany(company);
  //create new array by mapping companyData salary
  const salariesAtCompany = companyData.map((obj) => obj.salary);
  return calculateAverage(salariesAtCompany);
};

const getSalaryAtCompany = (role, company) => {
  const companyData = getDataByCompany(company);
  //create new array mapping companyData for matching roles, and then returns salary
  const roleAtCompany = companyData.find((obj) => obj.role === role);
  return roleAtCompany.salary;
};

const getIndustryAverageSalary = () => {
  const allSalaries = salaryData.map((obj) => obj.salary);
  return calculateAverage(allSalaries);
};

export {
  getAverageSalaryByRole,
  getAverageSalaryByCompany,
  getSalaryAtCompany,
  getIndustryAverageSalary,
};

// Helper Function that calculates the average for each array
// Note: This function does not need to be exported since it is only used by the functions contained within this module.
function calculateAverage(arrayOfNumbers) {
  let total = 0;
  arrayOfNumbers.forEach((number) => (total += number));
  return (total / arrayOfNumbers.length).toFixed(2);
}
