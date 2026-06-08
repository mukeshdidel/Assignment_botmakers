package dev.mukesh.AssignmentBotmakers.dto.request;

import dev.mukesh.AssignmentBotmakers.entity.Role;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record RegisterRequest(
        @NotBlank(message = "name is required")
        String name,

        @NotBlank(message = "email is required")
        @Email(message = "invalid email ")
        String email,

        @NotBlank(message = "password is required")
        @Size(min = 3)
        String password,

        @NotNull Role role
) {
}
