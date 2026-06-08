package dev.mukesh.AssignmentBotmakers.mapper;


import dev.mukesh.AssignmentBotmakers.dto.request.RegisterRequest;
import dev.mukesh.AssignmentBotmakers.dto.response.AuthResponse;
import dev.mukesh.AssignmentBotmakers.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface AuthMapper {

    @Mapping(target = "password", ignore = true)
    @Mapping(target = "id", ignore = true)
    User toUser(RegisterRequest request);

    AuthResponse toAuthResponse(User user);
}
