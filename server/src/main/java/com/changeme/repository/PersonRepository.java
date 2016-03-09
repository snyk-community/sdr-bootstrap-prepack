package com.changeme.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import java.sql.Date;

@RepositoryRestResource(collectionResourceRel = "persons", path = "persons")
public interface PersonRepository extends PagingAndSortingRepository<Person, Long> {

    Page<Person> findByDepartment(@Param("department") Department department, Pageable pageable);

    @Query("SELECT p from Person p " +
            "WHERE " +
            "(:lastName IS NULL or p.lastName like CONCAT('%',:lastName, '%')) AND " +
            "(:firstName IS NULL or p.firstName like  CONCAT('%',:firstName, '%')) AND " +
            "(:birthDate IS NULL or p.birthDate >= :birthDate) AND " +
            "(:department IS NULL or p.department = :department)")
    @RestResource(path="findPerson", rel="findPerson")
    Page<Person> findPerson(
            @Param("lastName")String lastName,
            @Param("firstName")String firstName,
            @Param("birthDate")Date birthDate,
            @Param("department")Department department,
            Pageable pageable);

}
