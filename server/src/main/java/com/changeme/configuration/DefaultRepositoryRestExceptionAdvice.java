package com.changeme.configuration;


import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.rest.webmvc.RepositoryRestExceptionHandler;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import java.sql.SQLIntegrityConstraintViolationException;
import java.util.Collections;
import java.util.List;

@ControllerAdvice(basePackageClasses = RepositoryRestExceptionHandler.class)
public class DefaultRepositoryRestExceptionAdvice {

    private class Error {

        private String entity;
        private String message;
        private String invalidValue;
        private String property;

        public Error() {
        }

        public Error(String message) {
            this.message = message;
        }

        public String getEntity() {
            return entity;
        }

        public void setEntity(String entity) {
            this.entity = entity;
        }

        public String getMessage() {
            return message;
        }

        public void setMessage(String message) {
            this.message = message;
        }

        public String getInvalidValue() {
            return invalidValue;
        }

        public void setInvalidValue(String invalidValue) {
            this.invalidValue = invalidValue;
        }

        public String getProperty() {
            return property;
        }

        public void setProperty(String property) {
            this.property = property;
        }
    }
    private class Errors {
        private final List<Error> errors = Collections.singletonList(new Error());

        public List<Error> getErrors() {
            return errors;
        }

        public Errors() {
        }

        public Errors(String message){
            errors.get(0).setMessage(message);
        }

    }

    @ExceptionHandler(HttpMessageNotReadableException.class)
    ResponseEntity handleHttpMessageNotReadableException(HttpMessageNotReadableException e) {
        return new ResponseEntity(
                new Errors(e.getRootCause().getMessage()),
                new HttpHeaders(),
                HttpStatus.BAD_REQUEST
        );
    }

    @ExceptionHandler(DataIntegrityViolationException.class)
    ResponseEntity handleDataIntegrityViolationException(DataIntegrityViolationException e) {
        return new ResponseEntity(
                new Errors(e.getRootCause().getMessage()),
                new HttpHeaders(),
                HttpStatus.BAD_REQUEST
        );
    }

    @ExceptionHandler(ConstraintViolationException.class)
    ResponseEntity handleConstraintViolationException(ConstraintViolationException e){
        if(e.getConstraintViolations().size() > 0){
            return new ResponseEntity(
                    new Errors(e.getConstraintViolations().iterator().next().getMessage()),
                    new HttpHeaders(),
                    HttpStatus.BAD_REQUEST
            );
        } else {
            return new ResponseEntity(
                    new Errors("Constraint violation: " + e.getMessage()),
                    new HttpHeaders(),
                    HttpStatus.BAD_REQUEST
            );
        }
    }

//    @ExceptionHandler
//    ResponseEntity handleException(Exception e) {
//        return new ResponseEntity(
//                new Errors(e.getMessage()),
//                new HttpHeaders(),
//                HttpStatus.BAD_REQUEST
//        );
//    }

}