package dev.mukesh.AssignmentBotmakers.dto.response;

import dev.mukesh.AssignmentBotmakers.entity.Role;

public record AuthResponse(
        String token,
        String name,
        String email,
        Role role
) {
}
