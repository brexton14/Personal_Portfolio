package com.system.portfolio.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class FrontendRouteController {

    @RequestMapping(value = "/{path:^(?!api|static|favicon\\.ico).*$}")
    public String forward(@PathVariable String path) {
        return "forward:/index.html";
    }
}