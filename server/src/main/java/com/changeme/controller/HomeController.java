package com.changeme.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.embedded.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
public class HomeController {

    @Value("${spring.data.rest.basePath}")
    private String basePath;

    private class DispatcherFilter implements Filter {

        @Override
        public void init(FilterConfig filterConfig) throws ServletException {

        }

        @Override
        public void doFilter(ServletRequest servletRequest,
                             ServletResponse servletResponse,
                             FilterChain filterChain) throws IOException, ServletException {
            HttpServletRequest req = (HttpServletRequest) servletRequest;
            String path = req.getRequestURI().substring(req.getContextPath().length());
            if (path.startsWith("/resources/") ||
                    path.startsWith(basePath) ||
                    path.startsWith("/public") ||
                    path.startsWith("/secure") ||
                    path.startsWith("/app") ||
                    path.startsWith("/index.html")) {
                filterChain.doFilter(servletRequest, servletResponse); // Goes to default servlet.
            } else {
                servletRequest.getRequestDispatcher("/app" + path).forward(servletRequest, servletResponse);
            }
        }

        @Override
        public void destroy() {

        }
    }

    @Bean
    public FilterRegistrationBean filterRegistrationBean() {
        FilterRegistrationBean registrationBean = new FilterRegistrationBean();
        DispatcherFilter filter = new DispatcherFilter();
        registrationBean.setFilter(filter);
        registrationBean.addUrlPatterns("/*");
        return registrationBean;
    }

    @RequestMapping(value = "/app/*")
    public String indexApp() {
        return "/index.html";
    }

    @RequestMapping(value = "/")
    public String index() {
        return "/index.html";
    }

}
