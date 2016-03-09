package com.changeme.repository;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.rest.core.annotation.Description;
import org.springframework.data.rest.core.config.Projection;

import java.sql.Date;

@Projection(name="personView" ,types = {Person.class})
public interface PersonView {

    public String getFirstName();

    public String getLastName();

    public Float getSalary();

    public boolean getProbationPeriod();

    @Description("{title: 'Date of birth', targetProp: 'birthDate'}")
    public Date getBirthDate();

    @Description("{title: 'Department', targetProp: 'department'}")
    @Value("[#{target.department.accessLevel.description}] #{target.department.name}")
    public String getDepartmentName();

}
