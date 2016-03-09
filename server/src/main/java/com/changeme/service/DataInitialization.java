package com.changeme.service;

import com.changeme.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sun.util.resources.cldr.aa.CalendarData_aa_DJ;

import javax.annotation.PostConstruct;
import java.sql.Date;
import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.util.*;

@Service
public class DataInitialization {

    private static final String[] departmentNames = {
            "Front Office", "Reservations", "Housekeeping", "Concierge", "Guest service", "Security", "Communication"
    };

    private static final String[] lastNames = {
            "Dough", "Longhorn", "Smith", "Lee", "Ferguson", "March", "Dark"
    };

    private static final String[] firstNames = {
            "Ann", "John", "Eliot", "George", "Marian", "Julia", "Elvis"
    };

    private static final NumberFormat numberFormat = new DecimalFormat("###.00");;

    @Autowired
    private DepartmentRepository departmentRepository;

    @Autowired
    private AccessLevelRepository accessLevelRepository;

    @Autowired
    private PersonRepository personRepository;

    @PostConstruct
    public void init(){

        List<AccessLevel> accessLevels = new ArrayList<>();
        for(int i = 0; i < departmentNames.length; i++){
            AccessLevel accessLevel = new AccessLevel();
            accessLevel.setDescription("Level " + (i + 1));
            accessLevelRepository.save(accessLevel);
            accessLevels.add(accessLevel);
        }

        List<Department> departments = new ArrayList<Department>();
        for(int i = 0; i < departmentNames.length; i++){
            Department department = new Department();
            department.setName(departmentNames[i]);
            department.setAccessLevel(accessLevels.get(i));
            departmentRepository.save(department);
            departments.add(department);
        }

        Calendar cal = Calendar.getInstance();
        Random rnd = new Random();
        for(int i = 0, d = 0; i < departmentNames.length * 2; i++, d += 2){

            cal.set(1980 + rnd.nextInt(10), Calendar.MAY, 17 + rnd.nextInt(10));

            Person person = new Person();
            person.setSalary(Float.parseFloat(numberFormat.format(rnd.nextDouble() * 1000)));
            person.setBirthDate(new Date(cal.getTimeInMillis()));
            person.setFirstName(firstNames[rnd.nextInt(firstNames.length - 1)]);
            person.setLastName(lastNames[rnd.nextInt(lastNames.length - 1)]);
            person.setDepartment(departments.get(rnd.nextInt(departments.size() - 1)));
            personRepository.save(person);
        }

    }

}
