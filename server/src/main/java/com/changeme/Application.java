package com.changeme;

import com.changeme.service.DataInitialization;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.embedded.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@ComponentScan("com.changeme")
@EnableTransactionManagement
public class Application {

    @Autowired
    private DataInitialization dataInitialization;

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

}
