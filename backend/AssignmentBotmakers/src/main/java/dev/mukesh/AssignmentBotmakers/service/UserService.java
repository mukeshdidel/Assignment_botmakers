package dev.mukesh.AssignmentBotmakers.service;

import dev.mukesh.AssignmentBotmakers.dto.request.LoginRequest;
import dev.mukesh.AssignmentBotmakers.dto.request.RegisterRequest;
import dev.mukesh.AssignmentBotmakers.dto.response.AuthResponse;
import dev.mukesh.AssignmentBotmakers.entity.User;
import dev.mukesh.AssignmentBotmakers.mapper.AuthMapper;
import dev.mukesh.AssignmentBotmakers.repository.UserRepo;
import dev.mukesh.AssignmentBotmakers.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    //service
    public final PasswordEncoder passwordEncoder;
    public final AuthenticationManager authenticationManager;
    public final JwtService jwtService;

    // repo
    public final UserRepo userRepo;

    // mapper
    private final AuthMapper authMapper;

    public AuthResponse register(RegisterRequest request) {

        if(userRepo.existsByEmail(request.email())) {
            throw new DataIntegrityViolationException("email already exists");
        }

        User user = authMapper.toUser(request);

        user.setPassword(passwordEncoder.encode(request.password()));

        userRepo.save(user);

        return authMapper.toAuthResponse(user, jwtService.generateJwtToken(user));


    }

    public AuthResponse login(LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.email(), loginRequest.password()));

        if(!authentication.isAuthenticated() || authentication.getPrincipal() == null) {
            throw new BadCredentialsException("invalid username or password");
        }

        User user = (User) authentication.getPrincipal();


        return authMapper.toAuthResponse(user, jwtService.generateJwtToken(user));

    }

}
