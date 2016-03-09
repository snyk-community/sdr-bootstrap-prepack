package com.changeme.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(exported = false)
public interface UserProfileRepository extends CrudRepository<UserProfile, Long> {

    UserProfile findByUsername(String username);

}
