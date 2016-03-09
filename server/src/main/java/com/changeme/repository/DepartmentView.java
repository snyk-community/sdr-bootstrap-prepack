package com.changeme.repository;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.rest.core.annotation.Description;
import org.springframework.data.rest.core.config.Projection;

@Projection(name="departmentView", types = {Department.class})
public interface DepartmentView {

    @Description("{title: 'Department', targetProp: 'name'}")
    @Value("[#{target.accessLevel.description}] #{target.name}")
    public String getFullName();

}
