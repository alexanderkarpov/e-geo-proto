package com.egeo.prototype.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Controller
public class GreetingController {

    private static final String YANDEX_API = "https://api-maps.yandex.ru/2.1/?lang=en_RU";

    private static final String DEFAULT_SCRIPT = "js/map-api-clean-map.js";

    private static final Map<String, String> SCRIPTS = new HashMap<>();
    static {
        SCRIPTS.put("polygon", "js/map-api-polygon.js");
        SCRIPTS.put("polygon-with-image", "js/map-api-polygon-with-image.js");
        SCRIPTS.put("custom-icons", "js/icon_customImage.js");
        SCRIPTS.put("custom-lines", "js/map-api-polyline.js");
        SCRIPTS.put("map-editor", "js/map-api-editor.js");
    }

    /*

    <li><a href="index.html?script=polygon">Polygon</a></li>
                            <li><a href="index.html?script=polygon-with-image">Polygon with image</a></li>
                            <li><a href="index.html?script=custom-icons">Custom icons</a></li>
                            <li><a href="index.html?script=custom-lines">Custom lines</a></li>
                            <li><a href="index.html?script=map-editor">Map editor</a></li>

     */

    @RequestMapping("/greeting")
    public String greeting(@RequestParam(value="name", required=false, defaultValue="World") String name, Model model) {
        model.addAttribute("name", "Sir" + name);
        return "greeting";
    }

    @RequestMapping("/")
    public String map(@RequestParam(value="script", required=false, defaultValue="default") String script,
                           Model model) {
        String js = Optional.ofNullable(SCRIPTS.get(script)).orElse(DEFAULT_SCRIPT);
        model.addAttribute("script", js);
        String api = "map-editor".equals(script) ? YANDEX_API + "&coordorder=longlat" : YANDEX_API;
        model.addAttribute("api", api);

        return "index";
    }

}
