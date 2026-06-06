package careerai_backend.controller;

import careerai_backend.dto.RegisterRequest;
import careerai_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import careerai_backend.dto.LoginRequest;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/test")
    public String test() {
        return "User API Working Successfully 🚀";
    }

    @PostMapping("/register")
    public String register(@RequestBody RegisterRequest request) {

        return userService.registerUser(request);

    }
    @PostMapping("/login")
    public String login(@RequestBody LoginRequest request) {

    return userService.loginUser(request);

}
}