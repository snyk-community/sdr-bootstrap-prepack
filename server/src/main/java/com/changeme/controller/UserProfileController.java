package com.changeme.controller;

import com.changeme.repository.UserProfile;
import com.changeme.repository.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;

@RestController
@RequestMapping(path = "/secure")
public class UserProfileController {

    @Autowired
    private UserProfileRepository userProfileRepository;

    @RequestMapping(method = RequestMethod.GET, value = "/user/profile")
    @PreAuthorize("hasAuthority('USER')")
    public ResponseEntity<?> authenticationRequest(HttpServletRequest request){
        Principal user = request.getUserPrincipal();
        if(user != null){
            UserProfile userProfile = userProfileRepository.findByUsername(user.getName());
            if(userProfile != null){
                return ResponseEntity.ok(userProfile);
            }
        }
        return new ResponseEntity<>("User account was not found in system", HttpStatus.BAD_REQUEST);
    }

}
