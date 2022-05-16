/// <reference types="react" />
export declare const Employees: string[];
export declare type EmployeeName = typeof Employees[number];
declare type EmployeeProps = {
    name: EmployeeName;
};
export declare const EmployeeCard: ({ name }: EmployeeProps) => JSX.Element | null;
export {};
