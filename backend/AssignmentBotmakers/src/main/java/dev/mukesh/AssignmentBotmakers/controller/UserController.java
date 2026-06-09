package dev.mukesh.AssignmentBotmakers.controller;


import dev.mukesh.AssignmentBotmakers.dto.request.LoginRequest;
import dev.mukesh.AssignmentBotmakers.dto.request.RegisterRequest;
import dev.mukesh.AssignmentBotmakers.dto.response.AdminDataResponse;
import dev.mukesh.AssignmentBotmakers.dto.response.AuthResponse;
import dev.mukesh.AssignmentBotmakers.dto.response.UserDataResponse;
import dev.mukesh.AssignmentBotmakers.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class UserController {


    // service
    public final UserService userService;

    @PostMapping("/register")
    ResponseEntity<AuthResponse> register(@Valid @RequestBody RegisterRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(userService.register(request));
    }

    @PostMapping("/login")
    ResponseEntity<AuthResponse> login(@RequestBody LoginRequest request) {
        return ResponseEntity.status(HttpStatus.OK).body(userService.login(request));
    }

    @GetMapping("/public/status")
    String status() {
        return "the application is running";
    }


    @GetMapping("/user")
    ResponseEntity<UserDataResponse> userData() {
        UserDataResponse response = new UserDataResponse("this is user data, accessed only by user");
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @GetMapping("/admin")
    ResponseEntity<AdminDataResponse> adminData() {
        AdminDataResponse response = new AdminDataResponse(
                "this is admin data, only accessed by admin",
                7
        );
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

}
