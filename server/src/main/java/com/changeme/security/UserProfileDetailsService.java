package com.changeme.security;

import com.changeme.repository.UserProfile;
import com.changeme.repository.UserProfileRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

@Component
public class UserProfileDetailsService implements UserDetailsService {

    private static final Logger log = LoggerFactory.getLogger(UserProfileDetailsService.class);

    private UserProfileRepository repository;

    @Autowired
    public UserProfileDetailsService(UserProfileRepository userProfileRepository) {
        this.repository = userProfileRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        log.info("Fetching user " + s);
        UserProfile userProfile = repository.findByUsername(s);
        log.info("Transforming " + userProfile + " into UserDetails object");
        UserDetails userDetails =
                new User(userProfile.getUsername(), userProfile.getPassword(),
                AuthorityUtils.commaSeparatedStringToAuthorityList(userProfile.getAuthorities()));
        log.info("About to return " + userDetails);
        return userDetails;
    }


}
