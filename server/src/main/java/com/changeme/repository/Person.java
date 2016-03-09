package com.changeme.repository;

import org.springframework.data.rest.core.annotation.Description;

import javax.persistence.*;
import java.sql.Date;
import java.text.SimpleDateFormat;

@Entity
public class Person {

//    private static final SimpleDateFormat isoFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss");

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Description("{title: 'First name'}")
    private String firstName;
    @Description("{title: 'Last name'}")
    private String lastName;
    @Description("{title: 'Salary'}")
    private Float salary;
    @Description("{title: 'Date of birth', type: 'date'}")
    private Date birthDate;
    @Description("{title: 'Probation', type: 'boolean'}")
    private boolean isProbationPeriod;
    @ManyToOne
    @Description(("{title: 'Department', type: 'manyToOne', projection: 'departmentView'}"))
    private Department department;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Float getSalary() {
        return salary;
    }

    public void setSalary(Float salary) {
        this.salary = salary;
    }

    public Date getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }

    public boolean getProbationPeriod() {
        return isProbationPeriod;
    }

    public void setIsProbationPeriod(boolean isProbationPeriod) {
        this.isProbationPeriod = isProbationPeriod;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }
}
