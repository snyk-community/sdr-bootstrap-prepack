package com.changeme.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "accessLevels", path = "accessLevels")
public interface AccessLevelRepository extends PagingAndSortingRepository<AccessLevel, Long> {
}
