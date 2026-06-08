package dev.mukesh.AssignmentBotmakers.service;

import dev.mukesh.AssignmentBotmakers.dto.request.RegisterRequest;
import dev.mukesh.AssignmentBotmakers.dto.response.AuthResponse;
import dev.mukesh.AssignmentBotmakers.entity.User;
import dev.mukesh.AssignmentBotmakers.mapper.AuthMapper;
import dev.mukesh.AssignmentBotmakers.repository.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    //service
    public final PasswordEncoder passwordEncoder;

    // repo
    public final UserRepo userRepo;

    // mapper
    private final AuthMapper authMapper;

    public AuthResponse register(RegisterRequest request) {

        User user = authMapper.toUser(request);

        user.setPassword(passwordEncoder.encode(request.password()));

        userRepo.save(user);

        return authMapper.toAuthResponse(user);


    }

}
