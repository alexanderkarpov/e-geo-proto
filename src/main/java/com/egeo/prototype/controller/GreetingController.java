package com.egeo.prototype.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class GreetingController {

    @RequestMapping("/greeting")
    public String greeting(@RequestParam(value="name", required=false, defaultValue="World") String name, Model model) {
        model.addAttribute("name", "Sir" + name);
        return "greeting";
    }

    @RequestMapping("/map")
    public String map(@RequestParam(value="script", required=false, defaultValue="js/map-api-clean-map.js") String script,
                           Model model) {
        model.addAttribute("script", script);
        return "map";
    }

}
