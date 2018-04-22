package dreamcraft.workhub.service;

import dreamcraft.workhub.model.Employee;

import java.util.List;

public interface EmployeeServiceInterface {
    List<Employee> selectAll();
    Employee selectById(int id);
    void save(Employee employee);
    void delete(Employee employee);
}
